export default defineEventHandler(async (event) => {
	const { sendMail } = useNodeMailer()

	const { token, contactForm } = await readBody<ContactFormRequest>(event)
	const { nodemailer, recaptcha } = useRuntimeConfig()

	try {
		if (!token) {
			return sendError(
				event,
				createError({
					statusCode: 400,
					message: 'CAPTCHA token is required',
				})
			)
		}

		// Validate the CAPTCHA token
		const formData = new URLSearchParams({
			secret: recaptcha.secretKey,
			response: token,
		})

		const recaptchaResponse = await $fetch<GoogleRecaptchaResponse>(
			'https://www.google.com/recaptcha/api/siteverify',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formData.toString(),
			}
		)

		// Check if verification was successful
		if (!recaptchaResponse.success) {
			return sendError(
				event,
				createError({
					statusCode: 400,
					message: 'Invalid reCAPTCHA',
				})
			)
		}

		// Send the email using nodemailer
		return sendMail({
			to: nodemailer.to,
			subject: `Contact from ${contactForm.name}`,
			html: `
			    <p><strong>Name:</strong> ${contactForm.name}</p>
			    <p><strong>Email:</strong> ${contactForm.email}</p>
			    <p><strong>Message:</strong> ${contactForm.message}</p>
			`,
			text: `
			    Name: ${contactForm.name}
			    Email: ${contactForm.email}
			    Message: ${contactForm.message}
			`,
		})
	} catch (error) {
		console.error('Error in contact form handler:', error)
		return sendError(
			event,
			createError({
				statusCode: 400,
				message: 'Invalid CAPTCHA',
			})
		)
	}
})

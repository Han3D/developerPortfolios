export default defineEventHandler(async (event) => {
	const { sendMail } = useNodeMailer()

	const body = await readBody(event)
	const { to } = useRuntimeConfig().nodemailer

	console.log('➤ ~ defineEventHandler ~ body:', body)
	console.log('➤ ~ defineEventHandler ~ to:', process.env.NUXT_NODEMAILER_TO)

	return sendMail({
		to,
		subject: `Contact from ${body.name}`,
		html: `
		    <p><strong>Name:</strong> ${body.name}</p>
		    <p><strong>Email:</strong> ${body.email}</p>
		    <p><strong>Message:</strong> ${body.message}</p>
		`,
		text: `
		    Name: ${body.name}
		    Email: ${body.email}
		    Message: ${body.message}
		`,
	})
})

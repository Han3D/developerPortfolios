interface Skill {
	key: string
	name: string
	img: string
	percent: number
	description: string
	experience: string
}

interface ContactForm {
	name: string
	email: string
	message: string
}

interface ContactFormRequest {
	token: string
	contactForm: ContactForm
}

interface GoogleRecaptchaResponse {
	success: boolean
	challenge_ts: string
	hostname: string
	score?: number
	action?: string
	'error-codes'?: string[]
}

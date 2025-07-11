<template>
	<div class="py-12">
		<UiSectionHeading>Contact me</UiSectionHeading>
		<div class="mb-24 flex flex-col items-center gap-8 md:flex-row">
			<img src="/img/eatramen.jpg" alt="my ramen eating avatar" class="h-32 w-32 rounded-full" />
			<div>
				<h3 class="text-lg font-bold text-neutral-100">Lets get in touch!</h3>
				<p>
					Please send me a
					<span class="text-accent-600">message</span>
					and you will be granted access to my downloads (CV and more). If you already have access
					you can contact me via my linked platforms, mail or also via this message box.
				</p>
			</div>
		</div>
		<UiAlert v-if="sendError" type="error" class="mb-8" close @close="sendError = false">
			<span>There was an error sending your message. Please try again later.</span>
			<span>If the problem persists, please contact me via my linked platforms.</span>
		</UiAlert>
		<UiAlert v-else-if="sendSuccess" type="success" class="mb-8" close @close="sendSuccess = false">
			<span>Your message has been sent successfully!</span>
			<span>Thank you for reaching out!</span>
		</UiAlert>
		<motion.div
			v-else
			:initial="{ opacity: 0, y: -20 }"
			:animate="{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }"
		>
			<UiForm ref="form" :state="state" :schema="schema" @submit="sendContact">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<UiFormfield name="name">
						<UiInput v-model="state.name" type="text" name="name" label="Name" required />
					</UiFormfield>
					<UiFormfield name="email">
						<UiInput v-model="state.email" type="email" label="Email" required />
					</UiFormfield>
				</div>
				<UiFormfield name="message">
					<UiTextarea v-model="state.message" label="Message" class="h-48" required />
				</UiFormfield>
				<UiButton
					icon="lucide:send-horizontal"
					class="mt-10"
					color="accent"
					trailing
					type="submit"
					:loading="loading"
				>
					Send Message
				</UiButton>
			</UiForm>
		</motion.div>
	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import type { IReCaptchaComposition } from 'vue-recaptcha-v3'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { z } from 'zod'

useHead({
	title: 'Contact Johannes Hueber - Get in Touch',
})

useSeoMeta({
	title: 'Contact Johannes Hueber - Get in Touch',
	description:
		'Contact Johannes Hueber (Han3D) for project inquiries, collaboration opportunities, or professional discussions. Get your message directly to me through this secure contact form.',
	ogTitle: 'Contact Johannes Hueber - Get in Touch',
	ogDescription:
		'Contact Johannes Hueber (Han3D) for project inquiries, collaboration opportunities, or professional discussions.',
	keywords: 'contact Johannes Hueber, Han3D contact, fullstack engineer contact, project inquiry',
})

// Structured data for contact page
useSchemaOrg([
	defineWebPage({
		'@type': 'ContactPage',
		name: 'Contact Johannes Hueber',
		description: 'Contact page for Johannes Hueber - Fullstack Engineer',
	}),
])

defineRouteRules({
	prerender: true,
	sitemap: { changefreq: 'yearly', priority: 0.7 },
})

const recaptcha: Ref<IReCaptchaComposition | undefined> = ref(undefined)

onMounted(() => {
	recaptcha.value = useReCaptcha()
})

async function getRecaptcha() {
	// Check if reCAPTCHA is available
	if (!recaptcha.value) {
		console.error('reCAPTCHA is not available')
		return undefined
	}
	const { executeRecaptcha, recaptchaLoaded } = recaptcha.value

	await recaptchaLoaded() // Wait for reCAPTCHA to load
	return await executeRecaptcha('contact') // Create a reCAPTCHA token
}

const state = ref<ContactForm>({
	name: '',
	email: '',
	message: '',
})

const schema = z.object({
	name: z.string().min(5, 'Name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(1, 'Message is required'),
})

const sendSuccess = ref(false)
const sendError = ref(false)
const loading = ref(false)
const form = useTemplateRef('form')

async function sendContact() {
	try {
		loading.value = true
		if (!form.value) {
			console.error('Form reference is not defined')
			sendError.value = true
			loading.value = false
			return
		}

		const token = await getRecaptcha()
		if (!token) {
			console.error('Failed to get reCAPTCHA token')
			sendError.value = true
			loading.value = false
			return
		}

		console.log('Sending contact email...')
		await $fetch('/api/mail', {
			method: 'POST',
			body: {
				token, // Include the reCAPTCHA token
				contactForm: state.value,
			},
		})
		form.value.resetForm()

		// Reset the form
		state.value = {
			name: '',
			email: '',
			message: '',
		}
		sendSuccess.value = true
	} catch (error) {
		// Handle the error
		console.error('Error sending email:', error)
		sendError.value = true
	} finally {
		loading.value = false
	}
}
</script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

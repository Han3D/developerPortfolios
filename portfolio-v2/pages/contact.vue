<template>
	<UiSectionHeading>Contact me</UiSectionHeading>

	<div class="mb-24 flex flex-col items-center gap-8 md:flex-row">
		<img src="/img/eatramen.jpg" alt="my ramen eating avatar" class="h-32 w-32 rounded-full" />
		<div>
			<h3 class="text-lg font-bold text-neutral-100">Lets get in touch!</h3>
			<p>
				Please send me a
				<span class="text-accent-600">message</span>
				and you will be granted access to my downloads (CV and more). If you already have access you
				can contact me via my linked platforms, mail or also via this message box.
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
	<UiForm v-else :state="state" :schema="schema" @submit="sendContact">
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
		<UiButton icon="lucide:send-horizontal" class="mt-10" color="accent" trailing type="submit">
			Send Message
		</UiButton>
	</UiForm>
</template>

<script setup lang="ts">
import { z } from 'zod'

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

async function sendContact() {
	// try {
	// 	console.log('Sending contact email...')
	// 	const response = await $fetch('/api/mail', {
	// 		method: 'POST',
	// 		body: {
	// 			name: state.value.name,
	// 			email: state.value.email,
	// 			message: state.value.message,
	// 		},
	// 	})
	// 	console.log('➤ ~ sendContact ~ response:', response)
	// } catch (error) {
	// 	console.error('Error sending email:', error)
	// }
	sendSuccess.value = true
}
</script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

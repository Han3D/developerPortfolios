<template>
	<div class="py-12">
		<UiSectionHeading>Login</UiSectionHeading>
		<UiAlert v-if="loginError" type="error" class="mb-8" close @close="loginError = false">
			<span>There was an error logging in. Please check your credentials and try again.</span>
			<span>If the problem persists, please contact me via my linked platforms.</span>
		</UiAlert>
		<UiAlert type="info" class="mb-8">
			<span>
				This site is currently with no functionality and only forwards you to the downloads page,
				that also currently has no functionality until i was able to decide on an authentication
				provider or implement it myself. Please have some patience. Thanks!
			</span>
		</UiAlert>
		<motion.div
			:initial="{ opacity: 0, y: -20 }"
			:animate="{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }"
		>
			<UiForm ref="form" :state="state" :schema="schema" @submit="login">
				<UiFormfield name="email">
					<UiInput v-model="state.email" type="email" label="Email" />
				</UiFormfield>
				<UiFormfield name="password">
					<UiInput v-model="state.password" type="password" label="Password" />
				</UiFormfield>
				<UiButton trailing type="submit" class="mt-10" block :loading="loading">Log In</UiButton>
			</UiForm>
		</motion.div>
	</div>
</template>

<script setup lang="ts">
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { motion } from 'motion-v'
import { z } from 'zod'

definePageMeta({
	middleware: ['auth'],
})

useHead({
	title: 'Login',
})

console.log('Attempting to load credentials from:', process.env.GOOGLE_APPLICATION_CREDENTIALS)

interface LoginForm {
	email: string
	password: string
}

const state = ref<LoginForm>({
	email: '',
	password: '',
})

const schema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})
const loading = ref(false)
const form = useTemplateRef('form')
const loginError = ref(false)

async function login() {
	try {
		loading.value = true
		if (!form.value) {
			console.error('Form reference is not defined')
			loading.value = false
			return
		}

		console.log('Logging in...')

		await navigateTo('/downloads')
	} catch (error) {
		console.error('Error during login:', error)
	} finally {
		loading.value = false
	}
}
</script>

<style scoped></style>

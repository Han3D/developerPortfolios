import { defineNuxtPlugin } from '#app'
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
	const { siteKey } = useRuntimeConfig().public.recaptcha
	if (!siteKey) {
		console.warn('VueReCaptcha: siteKey is not defined in public runtime config.')
		return
	}

	console.log('VueReCaptcha: Initializing...')
	nuxtApp.vueApp.use(VueReCaptcha, {
		siteKey, // Replace with your site key
		loaderOptions: {
			// autoHideBadge: true, // Optional: Automatically hides the badge
			explicitRenderParameters: {
				badge: 'bottomright', //incase you don't want to hide it
			},
		},
	})
})

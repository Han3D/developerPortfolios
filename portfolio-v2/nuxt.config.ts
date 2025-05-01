import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/scripts',
		'motion-v/nuxt',
		'@nuxtjs/supabase',
		'@nuxt/icon',
		'@nuxtjs/seo',
	],

	fonts: {
		families: [{ name: 'Roboto', provider: 'google' }],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	supabase: {
		redirectOptions: {
			login: '/login',
			callback: '/confirm',
			include: ['/downloads', '/admin'],
			exclude: ['/', '/contact'],
			saveRedirectToCookie: false,
		},
	},

	compatibilityDate: '2024-11-01',
})

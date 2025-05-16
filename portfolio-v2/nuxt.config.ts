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
		'@nuxt/icon',
		'@nuxtjs/seo',
		'nuxt-nodemailer',
		'nuxt-vuefire',
	],

	fonts: {
		families: [{ name: 'Raleway', provider: 'google' }],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	nitro: {
		prerender: {
			// these routes are not dependent on any data and can be prerendered
			// it's a good idea to pre render all routes that you can
			routes: ['/', '/contact'],
		},
		preset: 'firebase',

		// for the upcoming preset
		firebase: {
			gen: 2,
		},
	},

	vuefire: {
		emulators: {
			// uncomment this line to run the application in production mode without emulators during dev
			// enabled: false,
			auth: {
				options: {
					disableWarnings: true,
				},
			},
		},
		auth: {
			enabled: true,
			popupRedirectResolver: false,
		},
		config: {
			apiKey: '...',
			authDomain: '...',
			projectId: '...',
			appId: '...',
			// there could be other properties depending on the project
		},
	},

	nodemailer: {
		from: 'Han3D Portfolio',
		host: 'sandbox.smtp.mailtrap.io',
		port: 2525,
		// secure: true,
		auth: {
			user: '****abc',
			pass: '****abc',
		},
	},

	runtimeConfig: {
		nodemailer: {
			to: '',
		},
	},

	compatibilityDate: '2024-11-01',
})

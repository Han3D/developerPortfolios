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
	],

	fonts: {
		families: [{ name: 'Raleway', provider: 'google' }],
	},

	vite: {
		plugins: [tailwindcss()],
	},

	app: {
		head: {
			titleTemplate: '%s - %siteName',
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico',
				},
			],
		},
	},

	site: {
		name: 'Johannes Hueber',
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
		recaptcha: {
			secretKey: '',
		},
		public: {
			recaptcha: {
				siteKey: '',
			},
		},
	},

	compatibilityDate: '2024-11-01',
})

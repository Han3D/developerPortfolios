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
		url: 'https://han3d.dev',
		name: 'Johannes Hueber',
		description:
			'Portfolio of Johannes Hueber (Han3D) - a fullstack engineer with a sprinkle of devops from Germany.',
		defaultLocale: 'de',
		trailingSlash: true,
	},

	seo: {
		fallbackTitle: false,
		redirectToCanonicalSiteUrl: true,
	},

	sitemap: {
		strictNuxtContentPaths: true,
	},

	robots: {
		// Allow all bots to crawl the site
		groups: [
			{
				userAgent: ['*'],
				allow: ['/'],
				disallow: ['/admin'],
			},
		],
	},

	ogImage: {
		enabled: true,
		// This will generate dynamic OG images for your pages
	},

	schemaOrg: {
		identity: {
			type: 'Person',
			name: 'Johannes Hueber',
			url: 'https://han3d.dev', // Replace with your actual domain
			image: '/img/logo.png',
			sameAs: [
				// Add your social media profiles here
				'https://github.com/han3d',
				// 'https://linkedin.com/in/yourusername',
			],
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
		recaptcha: {
			secretKey: '',
		},
		public: {
			recaptcha: {
				siteKey: '',
			},
		},
	},

	experimental: {
		inlineRouteRules: true,
	},

	compatibilityDate: '2024-11-01',
})

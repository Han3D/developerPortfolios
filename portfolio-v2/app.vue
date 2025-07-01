<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
	description:
		'Portfolio of Johannes Hueber (Han3D) - a fullstack engineer with a sprinkle of devops from Germany. Specializing in modern web development, DevOps practices, and full-stack solutions.',
	ogLocale: 'de_DE',
	ogType: 'website',
	twitterCard: 'summary_large_image',
	robots: 'index, follow',
	author: 'Johannes Hueber',
	keywords: 'Johannes Hueber, Han3D, fullstack engineer, web developer, DevOps, portfolio, Germany',
	ogImage: '/img/logo.png',
	twitterImage: '/img/logo.png',
})

useHead({
	link: [
		{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.png',
		},
	],
})

// Structured data for the person/organization
useSchemaOrg([
	defineWebSite({
		name: 'Johannes Hueber Portfolio',
		url: 'https://han3d.dev',
	}),
	definePerson({
		name: 'Johannes Hueber',
		url: 'https://han3d.dev',
		image: '/img/logo.png',
		icon: '/img/logo.png',
		jobTitle: 'Fullstack Engineer',
		description: 'Fullstack engineer with a sprinkle of devops from Germany',
	}),
])

defineOgImageComponent('Pergel', {
	headline: 'Greetings',
	title: 'Johannes Hueber Portfolio',
	siteLogo: '/img/logo.png',
	siteName: 'han3d.dev',
	description: 'Welcome to my portfolio! Explore my work as a fullstack engineer.',
	theme: '#8fae02',
	colorMode: 'dark',
})
</script>

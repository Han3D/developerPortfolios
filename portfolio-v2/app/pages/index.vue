<template>
	<HomeHero />
	<HomeAboutMe />
	<LazyHomeProjects />
	<LazyHomeSkills />
	<LazyHomeLearnings />
</template>

<script setup lang="ts">
useHead({
	title: 'Johannes Hueber - Fullstack Engineer',
})

useSeoMeta({
	title: 'Johannes Hueber - Fullstack Engineer',
	description:
		'Welcome to the portfolio of Johannes Hueber (Han3D), a skilled fullstack engineer with a sprinkle of DevOps from Germany. Explore my projects, skills, and expertise in modern web development.',
	ogTitle: 'Johannes Hueber - Fullstack Engineer',
	ogDescription:
		'Welcome to the portfolio of Johannes Hueber (Han3D), a skilled fullstack engineer with a sprinkle of DevOps from Germany.',
	twitterTitle: 'Johannes Hueber - Fullstack Engineer',
	twitterDescription:
		'Welcome to the portfolio of Johannes Hueber (Han3D), a skilled fullstack engineer with a sprinkle of DevOps from Germany.',
})

// Structured data for the homepage
useSchemaOrg([
	defineWebPage({
		'@type': 'ProfilePage',
		name: 'Johannes Hueber Portfolio Homepage',
		description:
			"Homepage showcasing Johannes Hueber's skills, projects, and experience as a fullstack engineer.",
	}),
])

defineRouteRules({
	prerender: true,
	// Add route-specific SEO optimizations
	index: true,
	sitemap: { changefreq: 'monthly', priority: 1.0 },
})
</script>

<style scoped></style>

<template>
	<HomeHero />
	<HomeAboutMe />
	<LazyHomeProjects />
	<LazyHomeSkills />
	<LazyHomeLearnings />
</template>

<script setup lang="ts">
useHead({
	title: 'Startseite',
})

defineRouteRules({
	prerender: true,
})
</script>

<style scoped></style>

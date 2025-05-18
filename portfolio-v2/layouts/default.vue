<template>
	<Analytics />
	<SpeedInsights />
	<div class="container">
		<SharedNavigation />
		<main class="mt-28 min-h-screen">
			<slot />
		</main>
		<SharedFooter />
	</div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<style scoped></style>

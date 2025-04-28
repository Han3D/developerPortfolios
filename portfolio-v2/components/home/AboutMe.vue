<template>
	<section class="py-24">
		<div class="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row">
			<div v-motion-fade-visible class="flex flex-1 flex-col gap-6">
				<h2 class="text-primary-900 mb-2 text-3xl font-bold md:text-4xl">About Me</h2>
				<p class="text-primary-800 text-lg">
					I'm a
					<span class="text-accent-600 font-semibold">Full Stack Developer</span>
					with a passion for building modern web applications and a growing interest in
					<span class="text-accent-600 font-semibold">DevOps</span>
					and infrastructure. I enjoy working across the stack, from beautiful frontends to robust
					backends, and love automating workflows to make development smoother.
				</p>
				<p class="text-primary-800 text-lg">
					I thrive in creative environments and always look for ways to improve user experience and
					performance.
				</p>
			</div>
			<div v-motion-pop-visible class="flex flex-1 justify-center">
				<img
					src="/img/eatramen.jpg"
					alt="Johannes Hueber"
					class="border-accent-200 h-72 w-72 rounded-2xl border-4 object-cover shadow-2xl"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Animations handled by motion-v
</script>

<style scoped></style>

<template>
	<section class="flex flex-col items-center py-12 md:items-start">
		<span class="mb-2 font-semibold text-neutral-300">Hi I am</span>
		<h1 class="mb-4 text-4xl font-black text-white md:text-7xl">Johannes Hueber</h1>
		<p class="mb-8 text-pretty text-neutral-400">
			Creative Full Stack Developer with a sprinkle of Dev Ops.
		</p>
		<div class="mb-10 flex items-center gap-4">
			<UiButton to="/contact">Contact Me</UiButton>
			<UiButton to="/downloads">Download CV</UiButton>
		</div>
		<div class="flex justify-center gap-6">
			<a
				href="https://github.com/Han3D"
				target="_blank"
				aria-label="GitHub"
				class="text-accent-700 hover:text-accent-600 text-3xl transition"
			>
				<Icon name="mdi:github" />
			</a>
			<a
				href="https://www.linkedin.com/in/johannes-hueber-66731924b/"
				target="_blank"
				aria-label="LinkedIn"
				class="text-accent-700 hover:text-accent-600 text-3xl transition"
			>
				<Icon name="mdi:linkedin" />
			</a>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

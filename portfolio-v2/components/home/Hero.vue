<template>
	<section class="flex flex-col items-center py-12 md:items-start">
		<span class="text-accent-800 mb-2 font-semibold">Hi I am</span>
		<h1 class="mb-4 text-4xl font-black text-black md:text-7xl">Johannes Hueber</h1>
		<p class="text-primary-700 mb-8 font-medium">
			Creative Full Stack Developer & Designer passionate about building beautiful, performant web
			experiences.
		</p>
		<div class="mb-10 flex flex-wrap justify-center gap-4">
			<a
				href="/contact"
				class="bg-accent-500 hover:bg-accent-600 rounded-lg px-6 py-2 text-lg font-semibold text-white shadow-md transition"
			>
				Contact Me
			</a>
			<a
				href="/downloads"
				class="border-accent-500 text-accent-600 hover:bg-accent-50 rounded-lg border-2 px-6 py-2 text-lg font-semibold transition"
			>
				Download CV
			</a>
		</div>
		<div class="flex justify-center gap-6">
			<a
				href="https://github.com/Han3D"
				target="_blank"
				aria-label="GitHub"
				class="text-primary-700 hover:text-accent-600 text-3xl transition"
			>
				<Icon name="mdi:github" />
			</a>
			<a
				href="https://www.linkedin.com/in/johannes-hueber-66731924b/"
				target="_blank"
				aria-label="LinkedIn"
				class="text-primary-700 hover:text-accent-600 text-3xl transition"
			>
				<Icon name="mdi:linkedin" />
			</a>
			<a
				href="https://twitter.com/han3d_hue"
				target="_blank"
				aria-label="Twitter"
				class="text-primary-700 hover:text-accent-600 text-3xl transition"
			>
				<Icon name="mdi:twitter" />
			</a>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

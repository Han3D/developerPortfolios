<template>
	<section class="flex flex-col items-center py-12">
		<div class="flex w-full max-w-2xl flex-col items-center text-center">
			<img
				src="/img/logo.png"
				alt="Logo"
				class="border-accent-300 mb-6 h-24 w-24 rounded-full border-4 bg-white shadow-lg"
			/>
			<h1 class="text-primary-900 mb-4 text-5xl font-extrabold drop-shadow-lg md:text-6xl">
				Hi, I'm
				<span class="text-accent-600">Johannes Hueber</span>
			</h1>
			<p class="text-primary-700 mb-8 text-xl font-medium md:text-2xl">
				Creative Full Stack Developer & Designer passionate about building beautiful, performant web
				experiences.
			</p>
			<div class="mb-10 flex flex-wrap justify-center gap-4">
				<a
					href="/contact"
					class="bg-accent-500 hover:bg-accent-600 rounded-lg px-8 py-3 text-lg font-semibold text-white shadow-md transition"
				>
					Contact Me
				</a>
				<a
					href="/downloads"
					class="border-accent-500 text-accent-600 hover:bg-accent-50 rounded-lg border-2 px-8 py-3 text-lg font-semibold transition"
				>
					Download CV
				</a>
			</div>
			<span>bla</span>
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
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

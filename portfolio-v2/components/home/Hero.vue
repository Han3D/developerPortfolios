<template>
	<section class="flex flex-col items-center py-12 text-center md:items-start md:text-start">
		<span class="mb-2 font-semibold text-neutral-400">Hi I am</span>
		<h1
			class="hero__heading mb-2 text-5xl font-black tracking-tight text-white sm:text-7xl md:text-9xl"
		>
			Johannes Hueber
		</h1>
		<p class="mb-8 text-pretty text-neutral-400">
			Creative Full Stack Developer with a sprinkle of Dev Ops.
		</p>
		<div class="mb-10 flex flex-col items-center gap-4 md:flex-row">
			<div class="flex items-center gap-4">
				<UiButton to="/contact">Contact Me</UiButton>
				<UiButton to="/downloads">Download CV</UiButton>
			</div>
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/Han3D"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					class="hover:text-primary-500 text-primary-700 transition-colors"
				>
					<Icon name="lucide:github" class="size-6" />
				</a>
				<a
					href="https://www.linkedin.com/in/han3d"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					class="hover:text-primary-500 text-primary-700 transition-colors"
				>
					<Icon name="lucide:linkedin" class="size-6" />
				</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
@supports (background-clip: text) or (-webkit-background-clip: text) {
	.hero__heading {
		color: transparent;

		/* background-image: linear-gradient(90deg, white,red, white); */
		background-image: linear-gradient(
			142deg,
			var(--color-accent-400),
			var(--color-accent-800) 30%,
			white 30%,
			white 65%,
			var(--color-accent-600) 65%,
			var(--color-accent-100) 100%
		);
		background-clip: text;
		-webkit-background-clip: text;
	}
}
</style>

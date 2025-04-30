<template>
	<section class="flex flex-col items-center px-4 py-12">
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
	<main>
		<HomeAboutMe />
		<section class="py-24">
			<div class="container flex flex-col items-center gap-12 px-4 md:flex-row">
				<div v-motion-fade-visible class="flex flex-1 flex-col gap-6">
					<h2 class="primary-900 mb-2 text-3xl font-bold md:text-4xl">Learning Goals</h2>
					<ul class="text-primary-800 list-disc space-y-2 pl-6 text-lg">
						<li>
							Deepen my expertise in
							<span class="text-accent-600 font-semibold">Full Stack Development</span>
						</li>
						<li>
							Gain more hands-on experience with
							<span class="text-accent-600 font-semibold">infrastructure</span>
							and
							<span class="text-accent-600 font-semibold">DevOps</span>
						</li>
						<li>
							Explore
							<span class="text-accent-600 font-semibold">mobile development for iOS</span>
						</li>
					</ul>
				</div>
				<div v-motion-pop-visible class="flex flex-1 items-center justify-center">
					<img
						src="/img/tablet.png"
						alt="Learning Goals"
						class="border-accent-200 animate-bounce-slow h-72 w-72 rounded-2xl border-4 object-cover shadow-2xl"
					/>
				</div>
			</div>
		</section>
		<section class="py-24">
			<div class="container mx-auto px-4">
				<h2
					v-motion-fade-visible
					class="text-primary-900 mb-10 text-center text-3xl font-bold md:text-4xl"
				>
					Skills
				</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div
						v-motion-pop-visible
						class="border-primary-100 flex flex-col items-center rounded-2xl border bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105"
					>
						<img
							src="/img/skills/js.png"
							alt="JavaScript"
							class="animate-spin-slow mb-4 h-16 w-16"
						/>
						<h3 class="primary-800 mb-2 text-xl font-bold">JavaScript (Vue/Nuxt)</h3>
						<p class="text-primary-700 text-center">
							My strongest stack for building modern, interactive web apps.
						</p>
					</div>
					<div
						v-motion-pop-visible
						class="border-primary-100 flex flex-col items-center rounded-2xl border bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105"
					>
						<img
							src="/img/skills/Go-Logo_Blue.png"
							alt="Golang"
							class="mb-4 h-16 w-16 animate-bounce"
						/>
						<h3 class="primary-800 mb-2 text-xl font-bold">Golang</h3>
						<p class="text-primary-700 text-center">
							My go-to for high-performance backend services and APIs.
						</p>
					</div>
					<div
						v-motion-pop-visible
						class="border-primary-100 flex flex-col items-center rounded-2xl border bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105"
					>
						<img
							src="/img/skills/git.png"
							alt="Git & DevOps"
							class="mb-4 h-16 w-16 animate-pulse"
						/>
						<h3 class="primary-800 mb-2 text-xl font-bold">DevOps & Git</h3>
						<p class="text-primary-700 text-center">
							Automating, deploying, and collaborating with modern workflows.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes bounce-slow {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-20px);
	}
}
.animate-bounce-slow {
	animation: bounce-slow 2.5s infinite;
}
@keyframes spin-slow {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.animate-spin-slow {
	animation: spin-slow 6s linear infinite;
}
</style>

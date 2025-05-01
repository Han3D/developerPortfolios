<template>
	<section class="py-24">
		<div class="container mx-auto px-4">
			<h2 class="text-primary-900 mb-10 text-center text-3xl font-bold md:text-4xl">Skills</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div
					class="border-primary-100 flex flex-col items-center rounded-2xl border bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105"
				>
					<img src="/img/skills/js.png" alt="JavaScript" class="animate-spin-slow mb-4 h-16 w-16" />
					<h3 class="primary-800 mb-2 text-xl font-bold">JavaScript (Vue/Nuxt)</h3>
					<p class="text-primary-700 text-center">
						My strongest stack for building modern, interactive web apps.
					</p>
				</div>
				<div
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
					class="border-primary-100 flex flex-col items-center rounded-2xl border bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-105"
				>
					<img src="/img/skills/git.png" alt="Git & DevOps" class="mb-4 h-16 w-16 animate-pulse" />
					<h3 class="primary-800 mb-2 text-xl font-bold">DevOps & Git</h3>
					<p class="text-primary-700 text-center">
						Automating, deploying, and collaborating with modern workflows.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

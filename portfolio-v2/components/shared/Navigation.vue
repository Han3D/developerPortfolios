<template>
	<nav
		class="border-accent-800 dark:bg-primary-900/90 sticky top-4 z-50 mx-auto flex w-[90vw] max-w-2xl items-center justify-between rounded-full border bg-white/80 px-8 py-2 shadow-lg backdrop-blur-md"
	>
		<div class="flex items-center gap-4">
			<img src="/img/logo.png" alt="Logo" class="h-8 w-8" />
			<span class="text-primary-900 dark:text-primary-100 text-lg font-bold tracking-wide">
				Han3D
			</span>
		</div>
		<ul class="flex items-center gap-6">
			<li>
				<a href="/" class="text-primary-900 hover:text-accent-700 font-medium transition-colors">
					Home
				</a>
			</li>
			<li>
				<a
					href="/login"
					class="text-primary-900 hover:text-accent-700 font-medium transition-colors"
				>
					Login
				</a>
			</li>
			<li>
				<a
					href="/register"
					class="text-primary-900 hover:text-accent-700 font-medium transition-colors"
				>
					Register
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
// No script needed for static nav
</script>

<style scoped>
nav {
	box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.08);
}
</style>

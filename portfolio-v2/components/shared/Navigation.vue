<template>
	<nav
		class="border-accent-800 bg-accent-900/80 dark:bg-primary-900/90 sticky top-4 z-50 flex items-center justify-between rounded-full border px-6 py-2 shadow-lg backdrop-blur-md"
	>
		<div class="flex items-center gap-4">
			<img src="/img/logo.png" alt="Logo" class="h-8 w-8" />
		</div>
		<ul class="flex items-center gap-6">
			<SharedNavLink to="/" name="Home" :active="'/' === activeRoute" />
			<SharedNavLink to="/contact" name="Contact" :active="'/contact' === activeRoute" />
			<SharedNavLink to="/downloads" name="Downloads" :active="'/downloads' === activeRoute" />
			<!-- <Icon name="lucide:sun-dim" class="size-5" /> -->
		</ul>
	</nav>
</template>

<script setup lang="ts">
const activeRoute = useRoute().path
</script>

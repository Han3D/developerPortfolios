<template>
	<nav
		class="border-accent-800 from-accent-900/80 to-accent-800/90 sticky top-4 z-50 flex items-center justify-between rounded-full border bg-gradient-to-br px-6 py-2 shadow-lg backdrop-blur-md"
	>
		<div class="flex items-center gap-4">
			<img src="/img/logo.png" alt="Logo" class="h-8 w-8" />
		</div>
		<ul class="flex items-center gap-6">
			<SharedNavLink
				v-for="(link, index) in links"
				:key="index"
				:to="link.to"
				:name="link.name"
				:active="link.to === activeRoute"
				:icon="link.icon"
			/>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const activeRoute = useRoute().path

const links = [
	{ name: 'Home', to: '/', icon: 'lucide:house' },
	{ name: 'Contact', to: '/contact', icon: 'lucide:mail' },
	{ name: 'Downloads', to: '/downloads', icon: 'lucide:folder' },
]
</script>

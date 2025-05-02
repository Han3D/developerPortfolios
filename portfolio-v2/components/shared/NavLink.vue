<template>
	<li>
		<a
			:href="to"
			class="hover:text-accent-600 text-sm font-medium transition-colors"
			:class="activeClasses"
		>
			{{ name }}
		</a>
	</li>
</template>

<script setup lang="ts">
const { to, name, active } = defineProps<{
	to: string
	name: string
	active: boolean
}>()

const activeClasses = computed(() => {
	return active ? 'text-accent-600 border-b border-accent-500' : 'text-accent-700'
})
</script>

<style scoped></style>

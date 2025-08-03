<template>
	<li
		:class="activeClasses"
		class="hover:text-accent-500 flex items-center gap-2 text-sm font-medium transition-colors"
	>
		<!-- <Icon v-if="icon" :name="icon" /> -->
		<a :href="to">
			{{ name }}
		</a>
	</li>
</template>

<script setup lang="ts">
const { to, name, active, icon } = defineProps<{
	to: string
	name: string
	active: boolean
	icon?: string
}>()

const activeClasses = computed(() => {
	return active ? 'text-accent-500' : 'text-accent-600'
})
</script>

<style scoped></style>

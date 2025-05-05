<template>
	<a v-if="to" :href="to" :class="baseClasses">
		<slot />
	</a>
	<button v-else :class="baseClasses">
		<slot />
	</button>
</template>

<script setup lang="ts">
type Color = 'primary' | 'accent'

const { to, color = 'primary' } = defineProps<{
	to?: string
	color?: Color
}>()

const baseClasses =
	'bg-accent-700/75 border border-accent-600 hover:bg-accent-600 w-full rounded-lg py-2 px-4 font-medium text-sm text-white transition whitespace-nowrap'
</script>

<style scoped></style>

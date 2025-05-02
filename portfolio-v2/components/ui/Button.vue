<template>
	<a v-if="to" :href="to" :class="baseClasses">
		<slot />
	</a>
	<button v-else :class="baseClasses">
		<slot />
	</button>
</template>

<script setup lang="ts">
const { to } = defineProps<{
	to?: string
}>()

const baseClasses =
	'bg-accent-700/75 border border-accent-600 hover:bg-accent-600 w-full rounded-lg py-3 px-4 font-medium text-white transition !break-keep'
</script>

<style scoped></style>

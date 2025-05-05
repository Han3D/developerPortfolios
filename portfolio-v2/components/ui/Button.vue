<template>
	<a v-if="to" :href="to" :class="buttonClasses">
		<slot />
	</a>
	<button v-else :class="buttonClasses">
		<slot />
	</button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
type Color = 'primary' | 'accent' | 'neutral'

const { to, color = 'primary' } = defineProps<{
	to?: string
	color?: Color
}>()

const baseClasses =
	'border rounded-lg py-2 px-4 font-medium text-sm text-white transition whitespace-nowrap'

const colorClasses = {
	primary: 'bg-primary-700/75 border-primary-600 hover:bg-primary-600',
	accent: 'bg-accent-700/75 border-accent-600 hover:bg-accent-600',
	neutral: 'bg-neutral-700/75 border-neutral-600 hover:bg-neutral-600',
}

const buttonClasses = twMerge(baseClasses, colorClasses[color])
</script>

<style scoped></style>

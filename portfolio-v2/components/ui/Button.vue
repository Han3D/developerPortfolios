<template>
	<a v-if="to" :href="to" :class="buttonClasses">
		<Icon v-if="icon" :name="icon" />
		<slot />
	</a>
	<button v-else :class="buttonClasses">
		<Icon v-if="icon" :name="icon" />
		<slot />
	</button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
type Color = 'primary' | 'accent' | 'neutral' | 'transparent'

const {
	to,
	color = 'primary',
	icon,
	trailing = false,
	block = false,
} = defineProps<{
	to?: string
	color?: Color
	icon?: string
	trailing?: boolean
	block?: boolean
}>()

// CSS Classes
const baseClasses =
	'flex items-center gap-2 border rounded-lg py-2 px-4 font-medium text-sm text-white transition whitespace-nowrap hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ease-in-out'

const blockClasses = block ? 'w-full' : 'w-fit'

const trailingClasses = trailing ? 'flex-row-reverse' : 'flex-row'

const colorClasses = {
	primary: 'bg-primary-700/75 border-primary-600 hover:bg-primary-600',
	accent: 'bg-accent-700/75 border-accent-600 hover:bg-accent-600',
	neutral: 'bg-neutral-700/75 border-neutral-600 hover:bg-neutral-600',
	transparent: 'bg-transparent border-transparent text-neutral-100 hover:bg-neutral-700/50',
}

// Merge classes using twMerge
const buttonClasses = twMerge(baseClasses, blockClasses, trailingClasses, colorClasses[color])
</script>

<style scoped></style>

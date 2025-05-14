<template>
	<motion.div
		:class="alertClasses"
		:initial="{ opacity: 0, y: -20 }"
		:animate="{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }"
	>
		<Icon :name="icon[type]" class="h-8 min-w-8" />
		<div class="flex flex-col">
			<slot />
		</div>
		<button v-if="close" :class="closeClasses" @click="emit('close')">
			<Icon name="lucide:x" class="h-5 w-5" />
		</button>
	</motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { twMerge } from 'tailwind-merge'

type AlertType = 'success' | 'error' | 'warning' | 'info'

const {
	type,
	class: classes,
	close = false,
} = defineProps<{
	type: AlertType
	class?: string
	close?: boolean
}>()

const emit = defineEmits<{
	(e: 'close'): void
}>()

const baseClasses = 'relative flex items-center gap-2 rounded-lg px-3 py-4 border'

const typeClasses = {
	success: 'bg-green-600/30 text-green-400 border-green-700',
	error: 'bg-red-600/30 text-red-400 border-red-700',
	warning: 'bg-yellow-600/30 text-yellow-400 border-yellow-700',
	info: 'bg-blue-600/30 text-blue-400 border-blue-700',
}

const alertClasses = twMerge(baseClasses, typeClasses[type], classes)

const icon = {
	success: 'lucide:check-circle',
	error: 'lucide:x-circle',
	warning: 'lucide:alert-triangle',
	info: 'lucide:info',
}

const closeBaseClasses =
	'absolute top-0 right-0 bottom-0 bg-transparent w-10 px-1 flex items-center justify-center hover:cursor-pointer'

const closeTypeClasses = {
	success: 'text-green-400 hover:text-green-300 hover:bg-green-600/30 hover:text-green-300',
	error: 'text-red-400 hover:text-red-300 hover:bg-red-600/30 hover:text-red-300',
	warning: 'text-yellow-400 hover:text-yellow-300 hover:bg-yellow-600/30 hover:text-yellow-300',
	info: 'text-blue-400 hover:text-blue-300 hover:bg-blue-600/30 hover:text-blue-300',
}

const closeClasses = twMerge(closeBaseClasses, closeTypeClasses[type])
</script>

<style scoped></style>

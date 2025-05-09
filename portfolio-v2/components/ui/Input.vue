<template>
	<div class="relative flex w-full flex-col">
		<motion.input
			class="h-10 w-full rounded-lg border px-4 text-neutral-200 after:content-['']"
			:value="model"
			:name
			@focus="onFocus"
			@blur="onBlur"
		/>
		<!-- <motion.label
			:for="name"
			class="bg-primary-900 absolute top-1/2 left-2 z-10 px-2 text-neutral-400"
			:style="{
				transform,
			}"
		>
			{{ name }}
		</motion.label> -->
	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
defineOptions({
	inheritAttrs: false,
})

const model = defineModel<string | number>()

const { name } = defineProps<{
	name: string
}>()

// const attrs = useAttrs()

const y = useSpring(-50)
const transform = useMotionTemplate`translateY(${y}%)`

// Separate listeners (starting with "on") from other attrs
// const listeners = computed(() =>
// 	Object.fromEntries(
// 		Object.entries(attrs).filter(([key, val]) => key.startsWith('on') && typeof val === 'function')
// 	)
// )
// const inputAttrs = computed(() =>
// 	Object.fromEntries(Object.entries(attrs).filter(([key, val]) => !key.startsWith('on')))
// )

function onFocus(e: Event) {
	y.set(-160)
}

function onBlur(e: Event) {
	y.set(-50)
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>

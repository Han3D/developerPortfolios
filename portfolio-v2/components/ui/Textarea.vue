<template>
	<div class="relative flex w-full flex-col">
		<fieldset
			:class="`bg-primary-800/40 group rounded-lg border ${
				isFocused
					? 'border-primary-600 transition-colors delay-200 duration-300'
					: 'border-transparent transition-colors duration-300'
			}`"
		>
			<motion.legend
				class="text-primary-600 group-focus-within:text-primary-500 ml-2 px-2 transition-colors duration-300"
				:style="{ transform }"
			>
				{{ name }}
			</motion.legend>
			<textarea
				class="text-primary-300 h-10 w-full resize-none rounded-lg pl-3 focus:outline-none"
				:value="model"
				:name
				v-bind="inputAttrs"
				@focus="onFocus"
				@blur="onBlur"
			/>
		</fieldset>
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

const isFocused = ref(false)
const attrs = useAttrs()

const y = useSpring(100, { stiffness: 300, damping: 10, mass: 0.5 })
const transform = useMotionTemplate`translateY(${y}%)`

function onFocus(e: Event) {
	isFocused.value = true
	y.set(0)
}

function onBlur(e: Event) {
	isFocused.value = false
	y.set(100)
}

const inputAttrs = computed(() =>
	Object.fromEntries(Object.entries(attrs).filter(([key, val]) => !key.startsWith('on')))
)
</script>

<style scoped></style>

<template>
	<input
		v-bind="$attrs"
		:class="[
			'focus:ring-primary-500 h-12 w-full rounded-lg border px-4 transition-colors focus:ring-2 focus:outline-none',
			error ? 'border-red-500' : 'border-gray-300',
		]"
		:value="modelValue"
		@input="onInput"
		@change="$emit('change', $event)"
		@blur="$emit('blur', $event)"
		@focus="$emit('focus', $event)"
	/>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const { modelValue, error = false } = defineProps<{
	modelValue?: string | number
	error?: boolean
}>()

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus'])

function onInput(e: Event) {
	const target = e.target as HTMLInputElement
	emit('update:modelValue', target.value)
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>

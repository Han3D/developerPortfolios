<template>
	<div class="flex w-full flex-col">
		<slot />
		<p v-if="error && touched" :id="`${name}-error`" class="mt-1 text-sm text-red-500">
			{{ error }}
		</p>
	</div>
</template>

<script setup lang="ts">
const {
	label,
	name,
	error,
	touched = false,
	modelValue,
} = defineProps<{
	label: string
	name: string
	error?: string
	touched?: boolean
	modelValue?: string | number | boolean
}>()

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const isActive = ref(false)
const hasValue = computed(() => !!modelValue)

function onFocus(e: Event) {
	console.log('onFocus', e)
	isActive.value = true
	emit('focus', e)
}
function onBlur(e: Event) {
	isActive.value = false
	emit('blur', e)
}
function onInput(e: Event) {
	const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
	emit('update:modelValue', target.value)
}
</script>

<!-- No style block needed, all handled by Tailwind -->

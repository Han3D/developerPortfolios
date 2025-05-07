<template>
	<div class="flex w-full flex-col">
		<div class="relative flex w-full items-center">
			<slot
				:aria-describedby="error ? `${name}-error` : undefined"
				@focus="onFocus"
				@blur="onBlur"
				@input="onInput"
			/>
			<label
				:for="name"
				:class="[
					'pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 bg-transparent px-1 text-gray-400 transition-all duration-200',
					isActive || hasValue
						? 'text-primary-500 bg-primary-900 top-0 left-2 -translate-y-1/2 scale-95 text-xs'
						: 'text-base',
				]"
			>
				{{ label }}
			</label>
		</div>
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

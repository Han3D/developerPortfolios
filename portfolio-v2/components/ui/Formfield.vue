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
	name,
	error,
	touched = false,
} = defineProps<{
	label: string
	name: string
	error?: string
	touched?: boolean
	modelValue?: string | number | boolean
}>()
</script>

<!-- No style block needed, all handled by Tailwind -->

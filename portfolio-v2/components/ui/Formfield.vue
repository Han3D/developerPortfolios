<template>
	<div class="flex w-full flex-col">
		<slot />
		<span
			v-if="fieldError && isFieldTouched"
			:id="errorId"
			class="mt-1 ml-1 text-sm font-medium text-red-400"
		>
			{{ fieldError }}
		</span>
	</div>
</template>

<script setup lang="ts">
const { name } = defineProps<{
	name: string
}>()

// Provide the name to child components (Input, Textarea)
provide('fieldName', name)

const formContext = inject<any>('formContext')

const fieldError = computed(() => {
	return formContext?.validationErrors.value[name]?.[0]
})

const isFieldTouched = computed(() => {
	return formContext?.touchedFields.value[name]
})

const errorId = computed(() => `error-${name}`)

// function onFocus() {
// 	console.log('onFocus', name)
// 	formContext?.setTouched(name, true)
// }
// function onBlur() {
// 	console.log('onBlur', name)
// 	formContext?.setTouched(name, true)
// 	formContext?.validateField(name, formContext.state[name])
// }
</script>

<!-- No style block needed, all handled by Tailwind -->

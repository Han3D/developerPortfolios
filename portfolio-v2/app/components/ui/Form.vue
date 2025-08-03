<template>
	<form class="form-box-double flex flex-col space-y-2 p-8" @submit.prevent="onSubmit">
		<slot />
	</form>
</template>

<script setup lang="ts">
import type { ZodIssue, ZodObject } from 'zod'
import { ZodError } from 'zod'

const props = defineProps<{
	state: any
	schema: ZodObject<any, any, any> // Adjusted type for ZodObject
}>()

const emit = defineEmits(['submit'])

const validationErrors = ref<Record<string, string[] | undefined>>({})
const touchedFields = ref<Record<string, boolean>>({})

const setTouched = (fieldName: string, isTouched: boolean) => {
	touchedFields.value[fieldName] = isTouched
}

const clearFieldError = (fieldName: string) => {
	if (validationErrors.value[fieldName]) {
		const newErrors = { ...validationErrors.value }
		newErrors[fieldName] = undefined
		validationErrors.value = newErrors
	}
}

const validateField = async (fieldName: string, value: any) => {
	touchedFields.value[fieldName] = true // Mark as touched when validation is triggered
	const fieldSchema = props.schema.shape[fieldName]
	if (!fieldSchema) return // Field not in schema

	try {
		await fieldSchema.parseAsync(value)
		clearFieldError(fieldName)
	} catch (error) {
		if (error instanceof ZodError) {
			validationErrors.value = {
				...validationErrors.value,
				[fieldName]: error.errors.map((e: ZodIssue) => e.message),
			}
		}
	}
}

const validateForm = async () => {
	// Mark all fields defined in the schema as touched
	Object.keys(props.schema.shape).forEach((key) => {
		touchedFields.value[key] = true
	})

	const result = await props.schema.safeParseAsync(props.state)
	if (!result.success) {
		validationErrors.value = result.error.flatten().fieldErrors as Record<
			string,
			string[] | undefined
		>
		return false
	}
	validationErrors.value = {}
	return true
}

provide('formContext', {
	validationErrors,
	touchedFields,
	setTouched,
	validateField,
	clearFieldError,
	formState: toRef(props, 'state'), // Provide reactive state
	schema: toRef(props, 'schema'), // Provide reactive schema
})

// Optional: Watch for state changes to validate if touched
watch(
	() => props.state,
	async (newState, oldState) => {
		for (const key in newState) {
			if (newState[key] !== oldState?.[key] && touchedFields.value[key]) {
				await validateField(key, newState[key])
			}
		}
	},
	{ deep: true }
)

const onSubmit = async () => {
	const isValid = await validateForm()
	if (isValid) {
		emit('submit', props.state)
	}
}

defineExpose({
	validateForm,
	resetForm: () => {
		validationErrors.value = {}
		touchedFields.value = {}
	},
	setErrors: (errors: Record<string, string[] | undefined>) => {
		validationErrors.value = errors
		Object.keys(errors).forEach((key) => (touchedFields.value[key] = true))
	},
})
</script>

<style>
.form-box-single {
	background:
		linear-gradient(var(--color-primary-900), var(--color-primary-900)) padding-box,
		linear-gradient(215deg, var(--color-primary-800), transparent 35%) border-box;
	border: 4px solid transparent;
	border-radius: 12px;
}

.form-box-double {
	background:
		linear-gradient(var(--color-primary-900), var(--color-primary-900)) padding-box,
		linear-gradient(
				155deg,
				var(--color-primary-800),
				transparent 35%,
				transparent 75%,
				var(--color-primary-800)
			)
			border-box;
	border: 4px solid transparent;
	border-radius: 12px;
}
</style>

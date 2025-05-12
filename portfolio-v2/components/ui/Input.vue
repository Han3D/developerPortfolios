<template>
	<div class="relative flex w-full flex-col">
		<fieldset
			:class="`bg-primary-800/40 group rounded-lg border ${
				hasError && isTouched
					? 'border-red-400'
					: isFocused
						? 'border-primary-600 transition-colors delay-200 duration-300'
						: 'border-transparent transition-colors duration-300'
			}`"
		>
			<motion.legend
				:class="`ml-2 px-2 transition-colors duration-300 ${hasError && isTouched ? 'text-red-400' : isFocused ? 'text-primary-500' : 'text-primary-600'}`"
				:style="{ transform }"
			>
				{{ label }}
			</motion.legend>
			<input
				:id="fieldName"
				v-model="model"
				:name="fieldName"
				:class="`h-10 w-full pl-3 focus:outline-none ${hasError && isTouched ? 'text-red-200' : 'text-primary-300'}`"
				v-bind="inputAttrs"
				:aria-invalid="hasError && isTouched"
				:aria-describedby="hasError && isTouched ? `error-${fieldName}` : undefined"
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

const { label } = defineProps<{
	label: string
}>()

const isFocused = ref(false)
const attrs = useAttrs()
const formContext = inject<any>('formContext')
const fieldName = inject<string>('fieldName') // Inject the name from Formfield
const inputAttrs = computed(() =>
	Object.fromEntries(
		Object.entries(attrs).filter(([key, val]) => !key.startsWith('on') && key !== 'placeholder')
	)
)

const hasError = computed(
	() => !!(fieldName && formContext?.validationErrors.value[fieldName]?.length)
)
const isTouched = computed(() => !!(fieldName && formContext?.touchedFields.value[fieldName]))

// Animation
const y = useSpring(100, { stiffness: 300, damping: 10, mass: 0.5 })
const transform = useMotionTemplate`translateY(${y}%)`

function onFocus(e: Event) {
	isFocused.value = true
	y.set(0)
}

async function onBlur(e: Event) {
	if (!model.value && !hasError.value && !isTouched.value) {
		isFocused.value = false
		// Check if model.value is empty or undefined
		y.set(100)

		if (formContext) {
			formContext.clearFieldError(fieldName)
		}
	}
	if (formContext && fieldName) {
		formContext.setTouched(fieldName, true)
		await formContext.validateField(fieldName, model.value)
	}
}
</script>

<style scoped></style>

<template>
	<input
		v-bind="inputAttrs"
		:class="['h-12 w-full rounded-lg border px-4 text-neutral-200']"
		:value="model"
		v-on="listeners"
	/>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false,
})

const model = defineModel<string | number>()

const attrs = useAttrs()

// Separate listeners (starting with "on") from other attrs
const listeners = computed(() =>
	Object.fromEntries(
		Object.entries(attrs).filter(([key, val]) => key.startsWith('on') && typeof val === 'function')
	)
)
const inputAttrs = computed(() =>
	Object.fromEntries(Object.entries(attrs).filter(([key, val]) => !key.startsWith('on')))
)
</script>

<style scoped>
/* Add custom styles if needed */
</style>

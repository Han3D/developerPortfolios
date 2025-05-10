<template>
	<UiSectionHeading>Contact me</UiSectionHeading>

	<UiForm @submit.prevent>
		<UiFormfield label="Name" name="name">
			<UiInput type="text" name="Name" required />
		</UiFormfield>
		<UiButton type="submit" icon="lucide:send-horizontal" trailing>Send Message</UiButton>
	</UiForm>
</template>

<script setup lang="ts"></script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

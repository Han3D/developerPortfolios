<template>
	<UiSectionHeading>Contact me</UiSectionHeading>

	<UiForm @submit.prevent>
		<UiFormfield>
			<UiInput type="text" name="Name" required />
		</UiFormfield>
		<UiFormfield>
			<UiInput type="text" name="Email" required />
		</UiFormfield>
		<UiFormfield>
			<UiInput type="text" name="Phone Number" required />
		</UiFormfield>
		<UiButton type="submit" icon="lucide:send-horizontal" trailing>Send Message</UiButton>
	</UiForm>
</template>

<script setup lang="ts"></script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

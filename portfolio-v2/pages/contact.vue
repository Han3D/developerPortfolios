<template>
	<UiSectionHeading>Contact me</UiSectionHeading>

	<div class="mb-12 flex flex-col items-center gap-8 md:flex-row">
		<img src="/img/eatramen.jpg" alt="my ramen eating avatar" class="h-32 w-32 rounded-full" />
		<p>
			Please send me a
			<span class="text-accent-600">message</span>
			and you will be granted access to my downloads (CV and more). If you already have access you
			can contact me via my linked platforms, mail or also via this message box.
		</p>
	</div>

	<UiForm @submit.prevent>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<UiFormfield>
				<UiInput type="text" name="Name" required />
			</UiFormfield>
			<UiFormfield>
				<UiInput type="email" name="Email" required />
			</UiFormfield>
		</div>
		<UiFormfield>
			<UiTextarea name="Message" class="h-48" required />
		</UiFormfield>
	</UiForm>
	<UiButton type="submit" icon="lucide:send-horizontal" class="mt-10" color="accent" trailing>
		Send Message
	</UiButton>
</template>

<script setup lang="ts"></script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

<template>
	<div>
		<UiSectionHeading>Downloads</UiSectionHeading>
		<UiAlert type="info" class="mb-8">
			<span>
				This site is currently with no functionality until i was able to decide on an authentication
				provider or implement it myself. Please have some patience. Thanks!
			</span>
			<span>
				In the future this page will hold my downloadable items for authenticated users. For example
				my CV in englisch and one in german.
			</span>
		</UiAlert>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['auth'],
})
</script>

<style scoped></style>

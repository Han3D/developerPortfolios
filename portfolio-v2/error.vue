<template>
	<div class="container">
		<main class="mt-28 min-h-screen">
			<section class="grid grid-cols-1 gap-4 py-12 md:grid-cols-2">
				<div class="flex flex-col">
					<UiSectionHeading>Error</UiSectionHeading>
					<span
						class="mb-4 w-fit rounded-lg border border-red-700 bg-red-600/30 px-6 py-2 text-3xl font-bold text-red-500"
					>
						{{ error?.statusCode || 500 }}
					</span>
					<span class="text-base font-medium text-neutral-300">
						{{ error?.message || 'An unexpected error occurred.' }}
					</span>
					<UiButton class="mt-auto" @click="handleError">Go back home</UiButton>
				</div>
				<img src="/img/error1.png" alt="Ghost" class="mx-auto h-auto w-full max-w-sm" />
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>

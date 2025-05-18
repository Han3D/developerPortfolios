<template>
	<section class="grid grid-cols-1 gap-4 py-12 md:grid-cols-2">
		<div class="flex flex-col">
			<UiSectionHeading>
				<span class="flex items-center gap-2">Not Found</span>
			</UiSectionHeading>
			<span class="mb-8 text-lg text-neutral-300">
				Oops! Looks like this page vanished into thin air.
			</span>
			<p class="mb-6 !text-neutral-500">
				Maybe you took a wrong turn at Albuquerque?
				<br />
				<span class="text-primary-600 font-bold">
					Let's get you back
					<NuxtLink to="/" class="hover:text-primary-800 underline transition">home</NuxtLink>
					!
				</span>
			</p>
		</div>
		<img src="/img/notfound_ghost.png" alt="Ghost" class="mx-auto h-auto w-full max-w-sm" />
	</section>
</template>

<script setup>
useHead({
	title: '404 Not Found',
})

useSeoMeta({
	description:
		'Oops! Looks like this page vanished into thin air. Maybe you took a wrong turn at Albuquerque? Let’s get you back home!',
})
</script>

<style scoped></style>

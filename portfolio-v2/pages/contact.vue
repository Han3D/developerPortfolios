<template>
	<h1 class="text-primary-800 mb-8 text-center text-4xl font-extrabold drop-shadow-lg md:text-5xl">
		Get in Touch
	</h1>
	<section class="flex min-h-screen flex-col items-center">
		<form class="w-full max-w-lg space-y-6 p-8">
			<div>
				<label for="name" class="text-primary-900 mb-2 block text-lg font-medium">Name</label>
				<input
					id="name"
					type="text"
					placeholder="Your Name"
					required
					class="border-primary-200 focus:ring-accent-400 w-full rounded-lg border px-4 py-3 transition focus:ring-2 focus:outline-none"
				/>
			</div>
			<div>
				<label for="email" class="text-primary-900 mb-2 block text-lg font-medium">Email</label>
				<input
					id="email"
					type="email"
					placeholder="you@example.com"
					required
					class="border-primary-200 focus:ring-accent-400 w-full rounded-lg border px-4 py-3 transition focus:ring-2 focus:outline-none"
				/>
			</div>
			<div>
				<label for="message" class="text-primary-900 mb-2 block text-lg font-medium">Message</label>
				<textarea
					id="message"
					rows="5"
					placeholder="Your message..."
					required
					class="border-primary-200 focus:ring-accent-400 w-full resize-none rounded-lg border px-4 py-3 transition focus:ring-2 focus:outline-none"
				></textarea>
			</div>
			<div>
				<label for="social" class="text-primary-900 mb-2 block text-lg font-medium">
					Social Media Link
					<span class="optional text-primary-400 ml-1 text-sm">(optional)</span>
				</label>
				<input
					id="social"
					type="url"
					placeholder="https://yourprofile.com"
					class="border-primary-200 focus:ring-accent-400 w-full rounded-lg border px-4 py-3 transition focus:ring-2 focus:outline-none"
				/>
			</div>
			<button
				type="submit"
				class="submit-btn bg-accent-500 hover:bg-accent-600 w-full rounded-lg py-3 text-lg font-semibold text-white shadow-md transition"
			>
				Send Message
			</button>
		</form>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* No custom styles needed, all handled by Tailwind */
</style>

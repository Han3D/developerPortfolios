<template>
	<nav
		class="border-accent-800 dark:bg-primary-900/90 sticky top-4 z-50 flex items-center justify-between rounded-full border bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md"
	>
		<div class="flex items-center gap-4">
			<img src="/img/logo.png" alt="Logo" class="h-8 w-8" />
		</div>
		<ul class="flex items-center gap-6">
			<li>
				<a href="/" class="text-primary-900 hover:text-accent-700 font-medium transition-colors">
					Home
				</a>
			</li>
			<li>
				<a
					href="/contact"
					class="text-primary-900 hover:text-accent-700 font-medium transition-colors"
				>
					Contact
				</a>
			</li>
			<li>
				<a
					href="/downloads"
					class="text-primary-900 hover:text-accent-700 font-medium transition-colors"
				>
					Downloads
				</a>
			</li>
		</ul>
		<Icon name="lucide:sun-dim" class="size-5" />
	</nav>
</template>

<template>
	<div class="container">
		<SharedNavigation />
		<main class="container mt-20 min-h-screen">
			<slot />
		</main>
		<SharedFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
	<form class="form-box-double flex flex-col space-y-2 p-8">
		<slot />
	</form>
</template>

<script setup lang="ts"></script>

<style>
.form-box-single {
	background:
		linear-gradient(var(--color-primary-900), var(--color-primary-900)) padding-box,
		linear-gradient(215deg, var(--color-primary-800), transparent 35%) border-box;
	border: 4px solid transparent;
	border-radius: 12px;
}

.form-box-double {
	background:
		linear-gradient(var(--color-primary-900), var(--color-primary-900)) padding-box,
		linear-gradient(
				155deg,
				var(--color-primary-800),
				transparent 35%,
				transparent 75%,
				var(--color-primary-800)
			)
			border-box;
	border: 4px solid transparent;
	border-radius: 12px;
}
</style>

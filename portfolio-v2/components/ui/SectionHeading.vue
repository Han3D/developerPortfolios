<template>
	<h2 class="double-title relative mb-8 text-5xl font-black text-neutral-200 uppercase">
		<slot />
	</h2>
</template>

<script setup lang="ts"></script>

<style scoped>
.double-title {
	margin-left: 1rem;
	position: relative;
}

.double-title::before {
	content: '';
	position: absolute;
	left: -1rem;
	border-bottom: 2px solid var(--color-primary-600);
	width: 1rem;
	top: 6px;
	z-index: -10;
	/* color: var(--color-neutral-600); */
	font-size: 1em;
	font-weight: 900;
	pointer-events: none;
	/* filter: blur(1px); */
}
/* .double-title::after {
	content: '';
	position: absolute;
	border-left: 2px solid var(--color-primary-600);
	height: 0.75em;
	top: 6px;
	margin-left: 0.5rem;
	z-index: -10;
	font-size: 1em;
	font-weight: 900;
	pointer-events: none;
} */
</style>

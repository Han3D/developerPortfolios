<template>
	<section class="py-24">
		<UiSectionHeading>Learning Goals</UiSectionHeading>
		<div
			ref="cloudContainer"
			class="relative mx-auto mt-12 h-[420px] w-full max-w-3xl sm:h-[500px] md:h-[600px]"
		>
			<motion.div
				v-for="item in words"
				:key="item.text"
				:drag-constraints="cloudContainer"
				drag
				:initial="item.initial"
				:animate="item.animate"
				:transition="item.transition"
				class="absolute"
				:style="{ top: item.top, left: item.left, zIndex: item.z }"
			>
				<div
					:class="item.class + ' cursor-pointer transition-transform select-none hover:scale-110'"
				>
					{{ item.text }}
				</div>
			</motion.div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const cloudContainer = ref(undefined)

// Predefined positions and z-index for overlap and free flow
const words = [
	{
		text: 'Docker',
		class: 'text-blue-500 text-3xl font-bold drop-shadow-lg',
		top: '12%',
		left: '10%',
		z: 3,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -18, 10, 0],
			x: [0, 10, -8, 0],
			rotate: [0, 6, -4, 0],
			scale: [1, 1.08, 1, 0.97, 1],
		},
		transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Kubernetes',
		class: 'text-sky-600 text-2xl font-semibold drop-shadow',
		top: '30%',
		left: '22%',
		z: 2,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, 12, -10, 0],
			x: [0, -8, 10, 0],
			rotate: [0, -5, 3, 0],
			scale: [1, 1.05, 1, 1.02, 1],
		},
		transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'LLMs',
		class: 'text-fuchsia-500 text-4xl font-extrabold drop-shadow-lg',
		top: '18%',
		left: '55%',
		z: 4,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -25, 15, 0],
			x: [0, 12, -10, 0],
			rotate: [0, 8, -6, 0],
			scale: [1, 1.12, 1, 0.98, 1],
		},
		transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Blender',
		class: 'text-orange-400 text-2xl font-bold drop-shadow',
		top: '60%',
		left: '12%',
		z: 1,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, 10, -12, 0],
			x: [0, -10, 8, 0],
			rotate: [0, -7, 5, 0],
			scale: [1, 1.07, 1, 1.01, 1],
		},
		transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Firebase',
		class: 'text-amber-500 text-3xl font-bold drop-shadow-lg',
		top: '45%',
		left: '40%',
		z: 5,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -15, 10, 0],
			x: [0, 8, -6, 0],
			rotate: [0, 5, -3, 0],
			scale: [1, 1.09, 1, 0.99, 1],
		},
		transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Elasticsearch',
		class: 'text-green-600 text-xl font-semibold drop-shadow',
		top: '70%',
		left: '60%',
		z: 2,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, 8, -10, 0],
			x: [0, -6, 7, 0],
			rotate: [0, -4, 2, 0],
			scale: [1, 1.04, 1, 1.01, 1],
		},
		transition: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Grafana',
		class: 'text-orange-500 text-2xl font-bold drop-shadow',
		top: '65%',
		left: '35%',
		z: 3,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -12, 8, 0],
			x: [0, 7, -5, 0],
			rotate: [0, 6, -2, 0],
			scale: [1, 1.06, 1, 0.98, 1],
		},
		transition: { duration: 8.2, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'SwiftUI',
		class: 'text-pink-400 text-3xl font-bold drop-shadow-lg',
		top: '35%',
		left: '70%',
		z: 4,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, 15, -10, 0],
			x: [0, -10, 8, 0],
			rotate: [0, -8, 4, 0],
			scale: [1, 1.1, 1, 1.01, 1],
		},
		transition: { duration: 7.8, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Playwright',
		class: 'text-lime-500 text-2xl font-semibold drop-shadow',
		top: '80%',
		left: '75%',
		z: 1,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -10, 12, 0],
			x: [0, 8, -7, 0],
			rotate: [0, 5, -3, 0],
			scale: [1, 1.05, 1, 0.99, 1],
		},
		transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
	},
	{
		text: 'Github Actions',
		class: 'text-gray-800 text-2xl font-bold drop-shadow',
		top: '55%',
		left: '80%',
		z: 5,
		initial: { y: 0, x: 0, rotate: 0, scale: 1 },
		animate: {
			y: [0, -10, 10, 0],
			x: [0, 10, -10, 0],
			rotate: [0, 6, -6, 0],
			scale: [1, 1.08, 1, 0.97, 1],
		},
		transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
	},
]
</script>

<style scoped>
/* The container is relatively sized, words are absolutely positioned. */
</style>

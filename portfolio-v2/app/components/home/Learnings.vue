<template>
	<section class="py-24">
		<UiSectionHeading>Learning Goals</UiSectionHeading>
		<div class="grid grid-cols-1 gap-8">
			<div>
				<p>
					Eine Learning Roadmap habe ich deswegen aufgestellt, weil mich neue Technologien
					faszinieren und ich mich weiter verbessern möchte. Mit dieser beschäftige ich mich stetig
					in meiner Freizeit weiter. Zudem finde ich es im Beruf des Software - entwicklers /
					engineers ohnehin wichtig sich fortwährend weiterzubilden. Zu sehen welche erstaunlichen
					Techniken über die Zeit gefunden werden, um bekannte Probleme in der Planung, Entwicklung
					und Veröffentlichung von Software zu beheben, ist für mich sehr interessant.
					<br />
					<br />
					I have set up a learning roadmap because I am fascinated by new technologies and want to
					improve myself further. I am constantly working on this in my free time. In addition, I
					think it is important in the profession of a software developer / engineer to keep
					learning. To see what amazing techniques are found over time to fix known problems in the
					planning, development and release of software is very interesting to me.
				</p>
			</div>
			<div
				ref="cloudContainer"
				class="via-accent-900/10 relative mx-auto mt-12 h-[420px] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/20 to-blue-900/10 backdrop-blur-sm sm:h-[500px] md:h-[600px]"
			>
				<!-- Central Learning Core -->
				<motion.div
					:initial="{ scale: 0, rotate: 0 }"
					:animate="{
						scale: [1, 1.1, 1],
						rotate: [0, 360],
						boxShadow: [
							'0 0 20px rgba(var(--color-accent-500), 0.3)',
							'0 0 40px rgba(var(--color-primary-500), 0.6)',
							'0 0 20px rgba(var(--color-accent-500), 0.3)',
						],
					}"
					:transition="{
						scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
						rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
						boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
					}"
					class="to-accent-600 from-accent-800 absolute top-1/2 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gradient-to-r"
				>
					<span class="text-sm font-bold text-white">LEARN</span>
				</motion.div>

				<!-- Orbiting Learning Technologies -->
				<motion.div
					v-for="(item, index) in orbitingWords"
					:key="item.text"
					class="group absolute cursor-pointer text-slate-400"
					:initial="item.initial"
					:animate="item.animate"
					:transition="item.transition"
					:drag-constraints="cloudContainer"
					:style="{
						top: item.top,
						left: item.left,
						zIndex: item.z,
						transformOrigin: item.transformOrigin,
					}"
					drag
					@mouseenter="() => onWordHover(index, true)"
					@mouseleave="() => onWordHover(index, false)"
				>
					<div
						:class="
							item.class +
							' transition-all duration-300 select-none group-hover:scale-125 group-hover:text-white'
						"
					>
						{{ item.text }}
					</div>
				</motion.div>

				<!-- Background particle effects -->
				<motion.div
					v-for="n in 12"
					:key="`particle-${n}`"
					:initial="{ opacity: 0, scale: 0 }"
					:animate="{
						opacity: [0, 0.6, 0],
						scale: [0, 1, 0],
						x: [0, Math.random() * 400 - 200],
						y: [0, Math.random() * 300 - 150],
					}"
					:transition="{
						duration: 6 + Math.random() * 4,
						repeat: Infinity,
						delay: Math.random() * 4,
						ease: 'easeOut',
					}"
					class="bg-accent-400 absolute top-1/2 left-1/2 h-1 w-1 rounded-full"
				></motion.div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const cloudContainer = ref(undefined)
const hoveredIndex = ref<number | null>(null)

const onWordHover = (index: number, isHovered: boolean) => {
	hoveredIndex.value = isHovered ? index : null
}

// Orbital learning constellation with magnetic interactions
const orbitingWords = [
	{
		text: 'Kubernetes',
		class: 'text-4xl font-bold',
		top: '25%',
		left: '15%',
		z: 3,
		transformOrigin: '300px 200px',
		lineRotation: 45,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, -20, 15, -10, 0],
			x: [0, 25, -15, 20, 0],
			rotate: [0, 10, -5, 8, 0],
			scale: [1, 1.15, 0.95, 1.1, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 12,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 0,
		},
	},
	{
		text: 'LLMs',
		class: 'text-6xl font-black',
		top: '15%',
		left: '60%',
		z: 5,
		transformOrigin: '200px 250px',
		lineRotation: -30,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, -30, 20, -15, 0],
			x: [0, -20, 25, -10, 0],
			rotate: [0, -12, 8, -6, 0],
			scale: [1, 1.2, 0.9, 1.15, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 15,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 1,
		},
	},
	{
		text: 'SwiftUI',
		class: 'text-5xl font-bold',
		top: '70%',
		left: '20%',
		z: 4,
		transformOrigin: '150px 100px',
		lineRotation: 60,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, 18, -25, 12, 0],
			x: [0, -30, 15, -20, 0],
			rotate: [0, 15, -10, 7, 0],
			scale: [1, 1.18, 0.92, 1.12, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 13,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 2,
		},
	},
	// {
	// 	text: 'Blender',
	// 	class: 'text-orange-400 text-3xl font-semibold drop-shadow',
	// 	top: '65%',
	// 	left: '8%',
	// 	z: 2,
	// 	transformOrigin: '350px 50px',
	// 	lineRotation: -60,
	// 	initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
	// 	animate: {
	// 		y: [0, 15, -18, 10, 0],
	// 		x: [0, 20, -12, 18, 0],
	// 		rotate: [0, -8, 12, -4, 0],
	// 		scale: [1, 1.1, 0.95, 1.08, 1],
	// 		opacity: [0, 1, 1, 1, 1],
	// 	},
	// 	transition: {
	// 		duration: 11,
	// 		repeat: Infinity,
	// 		ease: 'easeInOut',
	// 		delay: 3,
	// 	},
	// },
	{
		text: 'Elasticsearch',
		class: 'text-2xl font-medium',
		top: '75%',
		left: '35%',
		z: 1,
		transformOrigin: '200px -100px',
		lineRotation: 120,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, -12, 20, -8, 0],
			x: [0, -15, 10, -12, 0],
			rotate: [0, 6, -9, 4, 0],
			scale: [1, 1.06, 0.98, 1.04, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 14,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 4,
		},
	},
	{
		text: 'Grafana',
		class: 'text-3xl font-bold',
		top: '55%',
		left: '35%',
		z: 3,
		transformOrigin: '100px 0px',
		lineRotation: 90,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, -22, 16, -12, 0],
			x: [0, 12, -18, 15, 0],
			rotate: [0, 9, -6, 11, 0],
			scale: [1, 1.12, 0.94, 1.09, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 16,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 5,
		},
	},
	{
		text: 'Playwright',
		class: 'text-2xl font-semibold',
		top: '80%',
		left: '50%',
		z: 2,
		transformOrigin: '50px -150px',
		lineRotation: -45,
		initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
		animate: {
			y: [0, -16, 22, -14, 0],
			x: [0, -25, 8, -18, 0],
			rotate: [0, -7, 13, -5, 0],
			scale: [1, 1.08, 0.96, 1.06, 1],
			opacity: [0, 1, 1, 1, 1],
		},
		transition: {
			duration: 10,
			repeat: Infinity,
			ease: 'easeInOut',
			delay: 6,
		},
	},
	// {
	// 	text: 'Github Actions',
	// 	class: 'text-indigo-400 text-xl font-bold drop-shadow',
	// 	top: '35%',
	// 	left: '5%',
	// 	z: 1,
	// 	transformOrigin: '400px 150px',
	// 	lineRotation: 15,
	// 	initial: { y: 0, x: 0, rotate: 0, scale: 1, opacity: 0 },
	// 	animate: {
	// 		y: [0, -18, 14, -16, 0],
	// 		x: [0, 28, -10, 22, 0],
	// 		rotate: [0, 12, -8, 10, 0],
	// 		scale: [1, 1.14, 0.92, 1.11, 1],
	// 		opacity: [0, 1, 1, 1, 1],
	// 	},
	// 	transition: {
	// 		duration: 18,
	// 		repeat: Infinity,
	// 		ease: 'easeInOut',
	// 		delay: 7,
	// 	},
	// },
]
</script>

<style scoped>
/* The container is relatively sized, words are absolutely positioned. */
</style>

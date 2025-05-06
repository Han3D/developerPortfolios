<template>
	<motion.div
		ref="card"
		class="relative hover:cursor-pointer"
		:style="{ transform, transformStyle: 'preserve-3d' }"
		@click="toggleFlip"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
	>
		<!-- Front Side -->
		<div
			class="bg-primary-800/40 border-primary-700/40 flex flex-col items-center justify-center rounded-lg border p-6 backface-hidden"
			style="backface-visibility: hidden; transform-style: preserve-3d; transform: translateZ(25px)"
		>
			<img v-if="skill.img" :src="'img/skills/' + skill.img" alt="" class="mb-4 size-20" />
			<h3 class="text-lg font-bold text-neutral-200">{{ skill.name }}</h3>
		</div>
		<!-- Back Side -->
		<div
			class="bg-primary-800/40 border-primary-800 absolute inset-0 flex flex-col items-center justify-center rounded-lg border p-6 backface-hidden"
			style="backface-visibility: hidden; transform: rotateY(180deg) translateZ(25px)"
		>
			<div class="mb-4 flex size-20 items-center justify-center">
				<svg class="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
					<circle
						class="text-accent-700/30"
						stroke="currentColor"
						stroke-width="4"
						fill="none"
						cx="18"
						cy="18"
						r="16"
					/>
					<circle
						class="text-accent-600"
						stroke="currentColor"
						stroke-width="4"
						fill="none"
						cx="18"
						cy="18"
						r="16"
						:stroke-dasharray="100"
						:stroke-dashoffset="100 - skill.percent"
						stroke-linecap="round"
					/>
				</svg>
				<span class="text-accent-400 absolute text-lg font-semibold">{{ skill.percent }}%</span>
			</div>
			<p class="px-4 text-base font-medium text-white">{{ skill.experience }} Years</p>
		</div>
	</motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
const { skill } = defineProps<{
	skill: Skill
}>()

const ROTATION_RANGE = 40
const HALF_ROTATION_RANGE = 40 / 2

const isFlipped = ref(false)
function toggleFlip() {
	if (isFlipped.value) {
		ySpring.set(0)
	} else {
		ySpring.set(180)
	}
	isFlipped.value = !isFlipped.value
}

const x = useMotionValue(0)
const y = useMotionValue(0)

const xSpring = useSpring(x)
const ySpring = useSpring(y)
const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

function handleMouseMove(e: MouseEvent) {
	if (!e.target) return [0, 0]

	const rect = (e.target as HTMLElement).getBoundingClientRect()

	const width = rect.width
	const height = rect.height

	const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
	const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

	const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
	const rY = mouseX / width - HALF_ROTATION_RANGE + (isFlipped.value ? 180 : 0)

	x.set(rX)
	y.set(rY)
}

function handleMouseLeave() {
	x.set(0)
	y.set(0 + (isFlipped.value ? 180 : 0))
}
</script>

<style scoped></style>

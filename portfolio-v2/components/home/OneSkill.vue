<template>
	<motion.div
		class="relative hover:cursor-pointer"
		:animate="{ rotateY: rotate }"
		:transition="{ type: 'spring', stiffness: 300, damping: 30 }"
		style="transform-style: preserve-3d; perspective: 1000px"
		@click="toggleFlip"
	>
		<!-- Front Side -->
		<div
			class="bg-primary-800/40 border-primary-700/40 flex flex-col items-center justify-center rounded-lg border p-6 backface-hidden"
			style="backface-visibility: hidden; transform: rotateY(0deg)"
		>
			<img v-if="skill.img" :src="'img/skills/' + skill.img" alt="" class="mb-4 size-10" />
			<h3 class="text-lg font-bold text-neutral-200">{{ skill.name }}</h3>
		</div>
		<!-- Back Side -->
		<div
			class="bg-primary-800/40 border-primary-800 absolute inset-0 flex flex-col items-center justify-center rounded-lg border p-6 backface-hidden"
			style="backface-visibility: hidden; transform: rotateY(180deg)"
		>
			<span>{{ skill.percent }}</span>
			<p class="px-4 text-base">{{ skill.experience }} Years</p>
		</div>
	</motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
const { skill } = defineProps<{
	skill: Skill
}>()

const rotate = ref(0)
const isFlipped = ref(false)

function flip(state: boolean) {
	isFlipped.value = state
	rotate.value = state ? 180 : 0
}
function toggleFlip() {
	flip(!isFlipped.value)
}
</script>

<style scoped></style>

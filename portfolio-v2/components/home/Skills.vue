<template>
	<section class="py-24">
		<UiSectionHeading>Skills</UiSectionHeading>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<HomeOneSkill v-for="skill in currentSkills" :key="skill.key" :skill="skill" />
		</div>
	</section>
</template>

<script setup lang="ts">
// Skills
const currentSkills: Skill[] = [
	{
		key: 'html',
		name: 'HTML',
		img: 'html.png',
		percent: 85,
		description: 'dummy__description',
		experience: '3+',
	},
	{
		key: 'css',
		name: 'CSS',
		img: 'css.png',
		percent: 90,
		description: 'dummy__description',
		experience: '3+',
	},
	{
		key: 'js',
		name: 'Javascript',
		img: 'js.png',
		percent: 70,
		description: 'dummy__description',
		experience: '1.5+',
	},
	{
		key: 'sql',
		name: 'SQL',
		img: 'sql.png',
		percent: 75,
		description: 'dummy__description',
		experience: '4+',
	},
	{
		key: 'angular',
		name: 'Angular',
		img: 'angular.png',
		percent: 75,
		description: 'dummy__description',
		experience: '1.5+',
	},
	{
		key: 'react',
		name: 'React',
		img: 'react.png',
		percent: 30,
		description: 'dummy__description',
		experience: '0.2',
	},
	{
		key: 'go',
		name: 'Go',
		img: 'Go-Logo_Blue.png',
		percent: 70,
		description: 'dummy__description',
		experience: '1+',
	},
	{
		key: 'csharp',
		name: 'C#',
		img: 'c--4.png',
		percent: 20,
		description: 'dummy__description',
		experience: '0.2',
	},
	{
		key: 'swift',
		name: 'Swift',
		img: 'swift.png',
		percent: 35,
		description: 'dummy__description',
		experience: '0.5',
	},
	{
		key: 'git',
		name: 'Git',
		img: 'git.png',
		percent: 60,
		description: 'dummy__description',
		experience: '3+',
	},
	{
		key: 'java',
		name: 'Java',
		img: 'java.png',
		percent: 65,
		description: 'dummy__description',
		experience: '2+',
	},
	{
		key: 'php',
		name: 'PHP',
		img: 'php.png',
		percent: 55,
		description: 'dummy__description',
		experience: '1+',
	},
]
</script>

<style scoped></style>

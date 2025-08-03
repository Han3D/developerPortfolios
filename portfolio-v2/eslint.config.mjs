import prettierPlugin from 'eslint-plugin-prettier'
import withNuxt from '.nuxt/eslint.config.mjs'

export default withNuxt(
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},

	{
		files: ['**/*.ts', '**/*.vue', '**/*.js'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/unified-signatures': 'off',

			'vue/multi-word-component-names': 'off',
			'vue/html-self-closing': 'off',
			'vue/no-multiple-template-root': 'off',
			'vue/require-default-prop': 'off',

			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		},
	}
)

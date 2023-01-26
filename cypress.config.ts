import { defineConfig } from 'cypress'

import customViteConfig from './vite.config'

export default defineConfig({
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite',
			viteConfig: customViteConfig,
		},
	},

	reporter: 'junit',

	reporterOptions: {
		mochaFile: 'results/TEST-[hash].xml',
	},
})

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': '/src',
			'~domains': '/src/domains',
			'~components': '/src/components',
			'~default': '/src/domains/default',
			'~example': '/src/domains/example',
			'~plugins': '/src/plugins',
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
	},
})

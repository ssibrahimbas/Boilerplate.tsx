import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': '/src',
			'~domains': '/src/domains',
			'~components': '/src/shared/components',
			'~default': '/src/domains/default',
			'~example': '/src/domains/example',
			'~theme': '/src/domains/theme',
			'~plugins': '/src/plugins',
			'~hooks': '/src/shared/hooks',
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
	},
})

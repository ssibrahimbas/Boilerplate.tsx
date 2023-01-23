const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
	content : [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
	mode : 'jit',
	purge : [
		'./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}'
	],
	darkMode : 'class',
	theme : {
		extend : {
			colors : {
				primary : {
					DEFAULT : '#1e90ff',
					50 : '#e6f2ff',
					100 : '#b3d6ff',
					200 : '#80baff',
					300 : '#4d9eff',
					400 : '#1a82ff',
					500 : '#0066ff',
					600 : '#004ccd',
					700 : '#003289',
					800 : '#001845',
					900 : '#000000'
				},
				secondary : {
					DEFAULT : '#ff4500',
					50 : '#fff0eb',
					100 : '#ffd1c2',
					200 : '#ffb298',
					300 : '#ff937f',
					400 : '#ff7455',
					500 : '#ff553c',
					600 : '#e64d36',
					700 : '#cc4530',
					800 : '#b23c2a',
					900 : '#993324'
				},
				tertiary : {
					DEFAULT : '#ffd700',
					50 : '#fffbe6',
					100 : '#fff2b3',
					200 : '#ffe980',
					300 : '#ffe04d',
					400 : '#ffd71a',
					500 : '#ffce00',
					600 : '#e6b800',
					700 : '#cc9f00',
					800 : '#b28600',
					900 : '#996d00'
				}
			},
			fontFamily : {
				'roboto' : [ 'Roboto', 'sans-serif' ],
				'roboto-mono' : [ 'Roboto Mono', 'monospace' ],
				'roboto-condensed' : [ 'Roboto Condensed', 'sans-serif' ],
				'roboto-slab' : [ 'Roboto Slab', 'serif' ],
				'roboto-black' : [ 'Roboto Black', 'sans-serif' ],
				'roboto-black-italic' : [ 'Roboto Black Italic', 'sans-serif' ],
				'roboto-bold' : [ 'Roboto Bold', 'sans-serif' ],
				'roboto-bold-italic' : [ 'Roboto Bold Italic', 'sans-serif' ],
				'roboto-italic' : [ 'Roboto Italic', 'sans-serif' ],
				'roboto-light' : [ 'Roboto Light', 'sans-serif' ],
				'roboto-light-italic' : [ 'Roboto Light Italic', 'sans-serif' ],
				'roboto-medium' : [ 'Roboto Medium', 'sans-serif' ],
				'roboto-medium-italic' : [ 'Roboto Medium Italic', 'sans-serif' ],
				'roboto-thin' : [ 'Roboto Thin', 'sans-serif' ],
				'roboto-thin-italic' : [ 'Roboto Thin Italic', 'sans-serif' ],
				'body' : [ 'Roboto', 'sans-serif' ],
				'heading' : [ 'Roboto Slab', 'serif' ],
				'mono' : [ 'Roboto Mono', 'monospace' ],
				'condensed' : [ 'Roboto Condensed', 'sans-serif' ],
				'black' : [ 'Roboto Black', 'sans-serif' ]
			},
			blur : {
				xs : '3px',
				...defaultTheme.blur
			},
			screens : {
				'xs' : '320px',
				...defaultTheme.screens
			}
		}
	},
	plugins : [
		require('@tailwindcss/forms'),
		require('@vechaiui/core')
	]
}

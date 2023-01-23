import { colors, ColorScheme } from '@vechaiui/react'

import { Theme } from '~theme/store/theme.slice'

export const light: ColorScheme = {
	id: Theme.Light,
	type: Theme.Light,
	colors: {
		bg: {
			base: colors.gray[100],
			fill: colors.gray[200],
		},
		text: {
			foreground: colors.gray[900],
			muted: colors.gray[600],
		},
		neutral: colors.gray,
		primary: colors.blue,
	},
}

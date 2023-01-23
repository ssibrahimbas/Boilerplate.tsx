import { colors, ColorScheme } from '@vechaiui/react'

import { Theme } from '~theme/store/theme.slice'

export const dark: ColorScheme = {
	id: Theme.Dark,
	type: Theme.Dark,
	colors: {
		bg: {
			base: colors.gray[900],
			fill: colors.gray[800],
		},
		text: {
			foreground: colors.gray[100],
			muted: colors.gray[400],
		},
		neutral: colors.gray,
		primary: colors.blue,
	},
}

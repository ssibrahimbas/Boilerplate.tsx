import { ColorScheme } from '@vechaiui/react'

import { dark } from '~theme/constants/DarkTheme'
import { light } from '~theme/constants/LightTheme'
import { Theme } from '~theme/store/theme.slice'

export const Themes: Record<Theme, ColorScheme> = {
	[Theme.Dark]: dark,
	[Theme.Light]: light,
}

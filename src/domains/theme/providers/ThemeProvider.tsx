import { extendTheme, VechaiProvider } from '@vechaiui/react'
import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '~hooks/store/store.hooks'
import { Themes } from '~theme/constants/Themes'
import { ThemeProviderProps } from '~theme/providers/ThemeProvider.types'

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const theme = useAppSelector((state) => state.theme.value)
	const isBrowser = useAppSelector((state) => state.theme.isBrowser)
	const isDefault = useAppSelector((state) => state.theme.isDefault)
	const dispatch = useAppDispatch()

	const extendedTheme = extendTheme({
		cursor: 'pointer',
		colorSchemes: Themes,
	})

	useEffect(() => {
		if (!isBrowser && isDefault) {
			dispatch({
				type: 'theme/setBrowserTheme',
			})
		}
	}, [isBrowser, isDefault, dispatch])

	return (
		<VechaiProvider theme={extendedTheme} colorScheme={theme}>
			{children}
		</VechaiProvider>
	)
}

export default ThemeProvider

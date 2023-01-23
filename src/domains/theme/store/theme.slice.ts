import { createSlice } from '@reduxjs/toolkit'

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

type ThemeState = {
	value: Theme
	isDefault: boolean
	isBrowser: boolean
}

const initialState: ThemeState = {
	value: Theme.Light,
	isDefault: true,
	isBrowser: false,
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.value = action.payload
			state.isDefault = false
			state.isBrowser = false
		},
		setBrowserTheme: (state) => {
			state.value = window.matchMedia('(prefers-color-scheme: dark)').matches
				? Theme.Dark
				: Theme.Light
			state.isDefault = false
			state.isBrowser = true
		},
	},
})

export const { setTheme, setBrowserTheme } = themeSlice.actions

export const theme = (state: ThemeState): Theme => state.value

export default themeSlice.reducer

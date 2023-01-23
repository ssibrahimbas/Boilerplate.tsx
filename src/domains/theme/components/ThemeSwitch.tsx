import { RadioGroup } from '@headlessui/react'
import { Icon } from '@vechaiui/react'
import React from 'react'
import { Moon, Sun } from 'react-feather'
import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '~hooks/store/store.hooks'
import { Theme } from '~theme/store/theme.slice'

const ThemeSwitch: React.FC = () => {
	const { t } = useTranslation('theme')
	const currentTheme = useAppSelector((state) => state.theme.value)
	const dispatch = useAppDispatch()

	const themes = [
		{ name: Theme.Light, icon: Moon },
		{ name: Theme.Dark, icon: Sun },
	]

	const onThemeChange = (value: Theme) => {
		dispatch({ type: 'theme/setTheme', payload: value })
	}

	return (
		<div className="flex flex-col">
			<RadioGroup value={currentTheme} onChange={onThemeChange}>
				{' '}
				<RadioGroup.Label className="sr-only">Radius</RadioGroup.Label>
				<div className="inline-flex p-0.5 space-x-0 rounded-base bg-neutral-200 dark:bg-neutral-700">
					{themes.map((theme) => (
						<RadioGroup.Option
							key={theme.name}
							value={theme.name}
							className={`inline-flex appearance-none items-center justify-center rounded-base cursor-base select-none relative whitespace-nowrap align-middle outline-none font-semibold text-xs px-4 py-2 focus:outline-none ${
								theme.name !== currentTheme
									? 'text-neutral-600 dark:text-neutral-400'
									: 'bg-white text-primary-500 shadow dark:bg-neutral-800'
							}
             `}
						>
							{' '}
							<Icon
								as={theme.icon}
								label={t(theme.name)}
								className="w-4 h-4"
							/>{' '}
							<span>{t(theme.name)}</span>{' '}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	)
}

export default ThemeSwitch

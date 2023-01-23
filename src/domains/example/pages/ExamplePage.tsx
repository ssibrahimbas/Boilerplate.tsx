import { Button } from '@vechaiui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Spin from '~components/spin/Spin'
import { SpinColor } from '~components/spin/Spin.types'
import { useGet } from '~hooks/http/request'
import ThemeSwitch from '~theme/components/ThemeSwitch'

type TodoItem = {
	completed: boolean
	id: number
	title: string
	userId: number
}

const ExamplePage = () => {
	const { t } = useTranslation('example')

	const [loading, request, error] = useGet<TodoItem>(
		'https://jsonplaceholder.typicode.com/todos/1'
	)

	return (
		<div className="w-60 h-60">
			<Spin loading={loading} color={SpinColor.Primary}>
				<h1>{t('title')}</h1> {error && <p>{error.message}</p>} <ThemeSwitch />{' '}
				<Button color="primary">Hello Vechai</Button>{' '}
			</Spin>
		</div>
	)
}

export default ExamplePage

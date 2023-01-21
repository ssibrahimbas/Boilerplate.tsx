import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useGet } from '~hooks/http/request'

type TodoItem = {
	completed: boolean
	id: number
	title: string
	userId: number
}

const ExamplePage = () => {
	const { t } = useTranslation('example')

	const [data, setData] = useState<TodoItem>({
		completed: false,
		id: 0,
		title: '',
		userId: 0,
	})
	const [loading, request, error] = useGet<TodoItem>(
		'https://jsonplaceholder.typicode.com/todos/1'
	)

	return (
		<div>
			<h1>{t('title')}</h1>
			<button onClick={() => request(setData)} disabled={loading}>
				{t('button')}
			</button>
			{loading && <p>{t('loading')}</p>} {data && <p>{data.title}</p>}{' '}
			{error && <p>{error.message}</p>}
		</div>
	)
}

export default ExamplePage

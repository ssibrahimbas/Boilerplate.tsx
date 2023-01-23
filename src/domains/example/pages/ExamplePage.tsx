import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import NumberInput from '~components/form/input/NumberInput'
import TextInput from '~components/form/input/TextInput'
import Spin from '~components/spin/Spin'
import { SpinColor } from '~components/spin/Spin.types'
import { useGet } from '~hooks/http/request'

type TodoItem = {
	completed: boolean
	id: number
	title: string
	userId: number
}

const ExamplePage = () => {
	const { t } = useTranslation('example')
	const [number, setNumber] = useState<number>(0)

	const onChange = (value: number) => {
		console.log(value)
		setNumber(value)
	}

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
		<div className="w-60 h-60">
			<Spin loading={loading} color={SpinColor.Primary}>
				<h1>{t('title')}</h1> {error && <p>{error.message}</p>}
				<div>
					{' '}
					<p>Small Primary</p>{' '}
					<button onClick={() => request(setData)} disabled={loading}>
						{t('button')}
					</button>{' '}
					<TextInput /> <br />{' '}
					<NumberInput value={number} onChange={onChange} step={3} />
				</div>
			</Spin>
		</div>
	)
}

export default ExamplePage

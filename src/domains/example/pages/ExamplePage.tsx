import React from 'react'
import { useTranslation } from 'react-i18next'

const ExamplePage = () => {
	const { t } = useTranslation('example')
	return (
		<div>
			<h1>{t('title')}</h1>
		</div>
	)
}

export default ExamplePage

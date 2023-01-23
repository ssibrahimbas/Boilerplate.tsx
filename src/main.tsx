import './index.css'
import '~plugins/i18n/i18n'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import RootFallback from '~components/shared/components/loaders/RootFallback'
import { router } from '~plugins/router/root.router'
import store from '~plugins/store/root.store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{' '}
		<ReduxProvider store={store}>
			{' '}
			<RouterProvider router={router} fallbackElement={<RootFallback />} />{' '}
		</ReduxProvider>{' '}
	</React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './plugins/i18n/i18n'
import { Provider as ReduxProvider } from 'react-redux'
import store from './plugins/store/root.store'
import { RouterProvider } from 'react-router-dom'
import { router } from './plugins/router/root.router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{' '}
		<ReduxProvider store={store}>
			{' '}
			<RouterProvider router={router} />{' '}
		</ReduxProvider>{' '}
	</React.StrictMode>
)

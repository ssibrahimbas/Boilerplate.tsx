import '~plugins/i18n/i18n'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import RootFallback from '~components/loaders/RootFallback'
import { router } from '~plugins/router/root.router'
import { store } from '~plugins/store/root.store'
import ThemeProvider from '~theme/providers/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{' '}
		<ReduxProvider store={store}>
			{' '}
			<ThemeProvider>
				{' '}
				<RouterProvider
					router={router}
					fallbackElement={<RootFallback />}
				/>{' '}
			</ThemeProvider>{' '}
		</ReduxProvider>{' '}
	</React.StrictMode>
)

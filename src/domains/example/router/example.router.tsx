import React from 'react'
import { RouteObject } from 'react-router-dom'

import ExamplePage from '../pages/ExamplePage'

export const exampleRoutes: RouteObject[] = [
	{
		path: '/example',
		element: <ExamplePage />,
	},
]

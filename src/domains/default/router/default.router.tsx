import React from 'react'
import { RouteObject } from 'react-router-dom'

import DefaultLayout from '../layout/DefaultLayout'

export const defaultRoutes: RouteObject[] = [
	{
		path: '/',
		element: <DefaultLayout />,
	},
]

import { createBrowserRouter } from 'react-router-dom'

import { defaultRoutes } from '~default/router/default.router'
import { exampleRoutes } from '~example/router/example.router'

export const router = createBrowserRouter([...defaultRoutes, ...exampleRoutes])

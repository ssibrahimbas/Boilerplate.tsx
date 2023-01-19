import { createBrowserRouter } from 'react-router-dom'
import { exampleRoutes } from '../../domains/example/router/example.router'

export const router = createBrowserRouter([...exampleRoutes])

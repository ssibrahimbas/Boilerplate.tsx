import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const UnauthorizedErrorBoundary: React.FC = () => {
	const error = useRouteError()
	if (!isRouteErrorResponse(error) || error.status !== 401) throw error
	return (
		<>
			<h1>You do not have access to this project</h1>
			<p>Handle unauthorized error in this line</p>
		</>
	)
}

export default UnauthorizedErrorBoundary

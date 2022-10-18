import React, { JSXElementConstructor } from 'react'
import Dashboard from 'private/container/dashboard/DashboardComponent';
import { ReactElement } from 'react';
const MyApp: React.FC<{ children?: ReactElement | JSXElementConstructor<HTMLElement> }> = () => {
	return (
		<Dashboard></Dashboard>
	)
}

export default MyApp
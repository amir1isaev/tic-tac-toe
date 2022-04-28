import React, { FC } from 'react'
import Layout from 'containers/Layout'
import AppRoutes from 'routes'

const App: FC<IProps> = () => {
	return (
		<Layout>
			<AppRoutes />
		</Layout>
	)
}

interface IProps {}
export default App

import { FC } from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'
import Post from 'pages/Post'
import Home from 'pages/Home'
import { browserRoutes } from 'core/routes'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={browserRoutes.homeBrowserRoutes.index()} element={<Home />} />
			<Route path={browserRoutes.postBrowserRoutes.index()} element={<Post />} />
		</Routes>
	)
}

export default AppRoutes
interface IProps {}

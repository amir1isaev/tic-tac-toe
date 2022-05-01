import { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import { browserRoutes } from 'core/routes'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={browserRoutes.homeBrowserRoutes.index()} element={<Home />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default AppRoutes
interface IProps {}

import React, { FC, ReactNode } from 'react'
import ContextProvider from './ContextProvider'
import ReduxProvider from './ReduxProvider'
import RouterProvider from './RouterProvider'
import ThemesProvider from './ThemesProvider'

const Providers: FC<IProps> = p => {
	const { children } = p
	return (
		<RouterProvider>
			<ReduxProvider>
				<ThemesProvider>
					<ContextProvider>{children} </ContextProvider>
				</ThemesProvider>
			</ReduxProvider>
		</RouterProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default Providers

import { Provider } from 'react-redux'
import React, { FC, ReactNode } from 'react'
import { store } from 'core/redux'

const ReduxProvider: FC<IProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

interface IProps {
	children?: ReactNode
}

export default ReduxProvider

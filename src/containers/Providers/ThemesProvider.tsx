import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { CommonStyles } from 'styles'
import { useGetTheme } from 'core/hooks'

const ThemesProvider: FC<IProps> = ({ children }) => {
	const { theme } = useGetTheme()

	return (
		<ThemeProvider theme={theme}>
			<CommonStyles />
			{children}
		</ThemeProvider>
	)
}

interface IProps {
	children: ReactNode
}

export default ThemesProvider

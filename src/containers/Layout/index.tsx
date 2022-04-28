import React, { FC, ReactNode } from 'react'
import Main from 'components/simple/Main'
import Footer from 'components/simple/Footer'
import Header from 'components/simple/Header'
import * as S from './styled'
import Providers from '../Providers'

const Layout: FC<IProps> = p => {
	const { children } = p

	return (
		<Providers>
			<S.Layout>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</S.Layout>
		</Providers>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout

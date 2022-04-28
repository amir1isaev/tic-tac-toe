import React, { FC, ReactNode } from 'react'
import * as S from './styled'

const Main: FC<IProps> = p => {
	const { children } = p
	return <S.Main>{children}</S.Main>
}

interface IProps {
	children: ReactNode
}
export default Main

import React, { FC } from 'react'
import Logotype from '../Logotype'
import * as S from './styled'

const Header: FC<IProps> = () => {
	return (
		<S.Header>
			<Logotype />
		</S.Header>
	)
}

interface IProps {}
export default Header

import Game from 'components/simple/Game'
import React, { FC } from 'react'
import * as S from './styled'

const Home: FC<IProps> = () => {
	return (
		<S.Home>
			<Game />
		</S.Home>
	)
}

interface IProps {}
export default Home

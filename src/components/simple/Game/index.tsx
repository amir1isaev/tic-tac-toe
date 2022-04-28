import React, { FC } from 'react'
import GameBody from '../GameBody'
import GameFooter from '../GameFooter'
import GameHeader from '../GameHeader'
import * as S from './styled'

const Game: FC<IProps> = () => {
	return (
		<S.Game>
			<GameHeader />
			<GameBody />
			<GameFooter />
		</S.Game>
	)
}

interface IProps {}
export default Game

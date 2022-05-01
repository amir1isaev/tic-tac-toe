import { Button } from 'amirisaevui'
import React, { FC } from 'react'
import { gameConstants } from 'core/constants'
import { useGameApi } from 'core/hooks'
import * as S from './styled'

const GameFooter: FC<IProps> = () => {
	const context = useGameApi()

	const gameStarted = context!.squares.filter(item => item.isShow).length >= 1
	const isShow = context!.isDraw || context!.winner || !gameStarted

	return (
		<S.GameFooter>
			<S.GameFooterBlock isShow={isShow}>
				<Button onClick={() => context?.restartHandler()} text={gameConstants.BUTTON_RESTART} />
			</S.GameFooterBlock>
		</S.GameFooter>
	)
}

interface IProps {}
export default GameFooter

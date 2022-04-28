import { Button } from 'amirisaevui'
import { useTheme } from 'styled-components'
import * as S from './styled'
import { gameConstants } from 'core/constants'
import { useCommonContext } from 'core/hooks'
import React, { FC } from 'react'
import O from '../O'
import X from '../X'

const GameResultModal: FC<IProps> = () => {
	const context = useCommonContext()
	const theme = useTheme()

	const getIcon = !context?.isXNext ? <X size={20} color={theme.colors.white} /> : <O size={20} color={theme.colors.white} />
	const isShow = context!.isDraw || context!.winner

	const getBg = context!.isDraw ? theme.colors.orange : !context?.isXNext ? theme.colors.primary : theme.colors.purple

	return (
		<S.GameResultModal isShow={isShow}>
			<S.Result>
				<S.Text bg={getBg}>
					{context?.winner && gameConstants.WINNER_IS}
					{context?.isDraw && gameConstants.DRAW}
				</S.Text>
				{context?.winner && <S.Icon bg={getBg}>{getIcon}</S.Icon>}
			</S.Result>
			<Button onClick={() => context?.restartHandler()} text={gameConstants.BUTTON_RESTART} />
		</S.GameResultModal>
	)
}

interface IProps {}
export default GameResultModal

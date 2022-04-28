import { gameConstants } from 'core/constants'
import { useCommonContext } from 'core/hooks'
import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import O from '../O'
import X from '../X'
import * as S from './styled'

const GameHeader: FC<IProps> = () => {
	const theme = useTheme()
	const context = useCommonContext()

	const isShow = context!.isDraw || context!.winner

	return (
		<S.GameHeader>
			<S.GameHeaderBlock isShow={isShow}>
				<S.Text>{gameConstants.NEXT_MOVE}&nbsp;&nbsp;&nbsp;-&nbsp;</S.Text>
				<S.Icon switchAnim={context!.isXNext}>
					<X size={25} color={theme.colors.primary} /> <O size={25} color={theme.colors.purple} />
				</S.Icon>
			</S.GameHeaderBlock>
		</S.GameHeader>
	)
}

interface IProps {}
export default GameHeader

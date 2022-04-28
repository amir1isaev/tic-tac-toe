import { useCommonContext } from 'core/hooks'
import React, { FC } from 'react'
import GameResultModal from '../GameResultModal'
import Square from '../Square'
import * as S from './styled'

const GameBody: FC<IProps> = () => {
	const context = useCommonContext()

	return (
		<S.GameBody>
			{context?.squares.map(item => (
				<Square key={item.id} onClick={() => context.squareHandler(item.id)} item={item} />
			))}
			<GameResultModal />
		</S.GameBody>
	)
}

interface IProps {}
export default GameBody

import { useCommonContext } from 'core/hooks'
import { ISquare } from 'core/interfaces'
import React, { FC, memo } from 'react'
import { useTheme } from 'styled-components'
import O from '../O'
import X from '../X'
import * as S from './styled'

const Square: FC<IProps> = memo(p => {
	const { item, onClick } = p
	const theme = useTheme()
	const context = useCommonContext()
	const color = item.isX ? theme.colors.primary : theme.colors.purple

	return (
		<S.Square winner={context!.winner} isWin={item!.isWin} onClick={onClick}>
			<S.Icon>
				{item.isShow ? (
					<>{item.isX ? <X color={color} /> : <O color={color} />}</>
				) : (
					<>
						<S.HoverIcon>{context?.isXNext ? <X color={theme.colors.primary} /> : <O color={theme.colors.purple} />}</S.HoverIcon>
					</>
				)}
			</S.Icon>
		</S.Square>
	)
})

interface IProps {
	item: ISquare
	onClick: () => void
}
export default Square

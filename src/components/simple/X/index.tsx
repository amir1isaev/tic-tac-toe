import React, { FC, memo } from 'react'
import * as S from './styled'

const X: FC<IProps> = memo(p => {
	const { color, size } = p

	const getDimensions = size ?? 46

	return (
		<S.X>
			<svg width={getDimensions} height={getDimensions} viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M3 3L43 43' stroke={color} strokeWidth='5' strokeLinecap='round' />
				<path d='M43 3L3.00003 43' stroke={color} strokeWidth='5' strokeLinecap='round' />
			</svg>
		</S.X>
	)
})

interface IProps {
	color: string
	size?: number | string
}
export default X

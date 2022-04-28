import React, { FC, memo } from 'react'
import * as S from './styled'

const O: FC<IProps> = memo(p => {
	const { color, size } = p
	const getDimensions = size ?? 50

	return (
		<S.O>
			<svg width={getDimensions} height={getDimensions} viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<circle cx='25' cy='25' r='23' stroke={color} strokeWidth='4' />
			</svg>
		</S.O>
	)
})

interface IProps {
	color: string
	size?: number | string
}
export default O

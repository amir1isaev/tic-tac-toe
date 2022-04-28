import { FooterLabels } from 'amirisaevui'
import React, { FC } from 'react'
import * as S from './styled'

const MyFooter: FC<IProps> = () => {
	return (
		<S.Footer>
			<FooterLabels />
		</S.Footer>
	)
}

interface IProps {}
export default MyFooter

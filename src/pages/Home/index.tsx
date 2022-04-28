import { Button, Container } from 'amirisaevui'
import Game from 'components/simple/Game'
import O from 'components/simple/O'
import X from 'components/simple/X'
import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import * as S from './styled'

const Home: FC<IProps> = () => {
	const theme = useTheme()
	return (
		<S.Home>
			<Game />
		</S.Home>
	)
}

interface IProps {}
export default Home

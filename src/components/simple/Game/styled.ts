import styled from 'styled-components'

const Game = styled.div<IGameProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

interface IGameProps {}
export { Game }

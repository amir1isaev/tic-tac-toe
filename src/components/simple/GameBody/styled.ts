import styled from 'styled-components'

const GameBody = styled.div<IGameBodyProps>`
	width: 300px;
	height: 300px;
	gap: 5px;
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	z-index: 2;
	@media (max-width: 350px) {
		width: 260px;
		height: 260px;
	}
	@media (max-width: 330px) {
		width: 240px;
		height: 240px;
	}
`

interface IGameBodyProps {}
export { GameBody }

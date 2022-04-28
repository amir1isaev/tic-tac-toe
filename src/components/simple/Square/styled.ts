import styled, { css, keyframes } from 'styled-components'

const winStyle = css``
const loseStyle = css`
	transform: rotateX(90deg);
`
const iconAnim = keyframes`
	0%{
			transform: rotateX(-90deg);
	}
	100%{
			transform: rotateX(0deg);
	}
`

const Square = styled.div<ISquareProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.secondary};
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	${({ isWin, winner }) => (winner ? (isWin ? winStyle : loseStyle) : null)}
`
const Icon = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		animation: ${iconAnim} 0.3s;
	}
`
const HoverIcon = styled.div`
	@media (hover: none) {
		display: none;
	}
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		opacity: 0;
		transition: all 0.2s ease-in-out;
		transform: rotateX(90deg);
	}
	&:hover {
		span {
			transform: rotateX(0deg);
			opacity: 0.3;
		}
	}
`

interface ISquareProps {
	winner: boolean
	isWin: boolean
}
export { Square, Icon, HoverIcon }

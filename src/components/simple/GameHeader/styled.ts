import styled, { css, keyframes } from 'styled-components'

const GameHeaderBlockShowStyle = css`
	opacity: 0;
	transform: translateY(40px);
`
const showXStyle = css`
	span:first-child {
		transform: translateY(0px);
		opacity: 1;
	}
	span:last-child {
		transform: translateY(10px);
		opacity: 0;
	}
`
const showOStyle = css`
	span:first-child {
		transform: translateY(-10px);
		opacity: 0;
	}
	span:last-child {
		transform: translateY(0px);
		opacity: 1;
	}
`
const GameHeader = styled.div<IGameHeaderProps>`
	height: 40px;
	z-index: 1;
`
const Text = styled.div`
	color: ${({ theme }) => theme.colors.font};
	font-weight: 800;
	font-style: italic;
	font-size: 22px;
`
const GameHeaderBlock = styled.div<IGameHeaderBlockProps>`
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	opacity: 1;
	transition: all 0.3s ease-in-out;
	${({ isShow }) => isShow && GameHeaderBlockShowStyle}
`
const Icon = styled.div<IGameHeaderIconProps>`
	width: 25px;
	height: 25px;
	position: relative;
	span {
		transition: all 0.3s ease-in-out;
		position: absolute;
	}
	${({ switchAnim }) => (switchAnim ? showXStyle : showOStyle)}
`

interface IGameHeaderProps {}
interface IGameHeaderIconProps {
	switchAnim: boolean
}
interface IGameHeaderBlockProps {
	isShow: boolean
}
export { GameHeader, Text, GameHeaderBlock, Icon }

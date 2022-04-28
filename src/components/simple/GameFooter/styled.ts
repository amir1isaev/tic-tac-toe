import styled, { css } from 'styled-components'

const GameFooterBlockShowStyle = css`
	opacity: 0;
	transform: translateY(-50px);
`

const GameFooter = styled.div<IGameFooterProps>`
	height: 60px;
	display: flex;
	z-index: 1;
	align-items: flex-end;
	justify-content: flex-end;
`
const GameFooterBlock = styled.div<IGameFooterBlockProps>`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	opacity: 1;
	transition: all 0.3s ease-in-out;
	${({ isShow }) => isShow && GameFooterBlockShowStyle}
`

interface IGameFooterProps {}
interface IGameFooterBlockProps {
	isShow: boolean
}
export { GameFooter, GameFooterBlock }

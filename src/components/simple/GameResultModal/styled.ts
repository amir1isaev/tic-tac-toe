import { hexInRgba } from 'core/utils'
import styled, { css } from 'styled-components'

const GameResultModalShowStyle = css`
	transition-delay: 0.3s;
	opacity: 1;
	z-index: 2;
	visibility: visible;
	transform: scale(1);
`

const GameResultModal = styled.div<IGameResultModalProps>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: white;
	flex-direction: column;
	opacity: 0;
	transform: scale(1.2);
	transition: all 0.3s ease-in-out;
	z-index: -1;
	overflow: hidden;
	background-color: ${({ theme }) => hexInRgba(theme.colors.secondary, 0.8)};
	${({ isShow }) => isShow && GameResultModalShowStyle}
`
const Result = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	margin-bottom: 30px;
`
const Icon = styled.div<IIconProps>`
	height: 32px;
	width: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ bg }) => bg};
`

const Text = styled.h3<ITextProps>`
	color: ${({ theme }) => theme.colors.white};
	font-weight: 800;
	font-style: italic;
	font-size: 22px;
	background-color: ${({ bg }) => bg};
	padding: 5px;
`
interface IGameResultModalProps {
	isShow: boolean
}
interface ITextProps {
	bg: string
}
interface IIconProps {
	bg: string
}

export { GameResultModal, Result, Text, Icon }

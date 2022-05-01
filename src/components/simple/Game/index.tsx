/* eslint-disable array-callback-return */
import { GameContext } from 'core/context'
import { ISquare } from 'core/interfaces'
import { calculateWinner, squaresArr } from 'core/utils'
import React, { FC, useState } from 'react'
import GameBody from '../GameBody'
import GameFooter from '../GameFooter'
import GameHeader from '../GameHeader'
import * as S from './styled'

const checkSquareIsActive = (squares: ISquare[], id: number) =>
	squares.find(square => {
		if (square.id === id) {
			return square.isShow
		}
	})
const showSquare = (squares: ISquare[], id: number, isXNext: boolean) =>
	squares.map(square => {
		if (square.id === id) {
			square.isShow = true
			square.isX = isXNext
		}
		return square
	})
const getWinSquares = (squares: ISquare[], winLine: number[]) =>
	squares.map(el => {
		winLine.map(item => {
			if (el.id === item) {
				el.isWin = true
			}
		})
		return el
	})

const checkIsShowSquareLength = (squares: ISquare[]) => squares.filter(item => item.isShow).length

const Game: FC<IProps> = () => {
	const [squares, setSquares] = useState<ISquare[]>(squaresArr)
	const [winner, setWinner] = useState<boolean>(false)
	const [isXNext, setIsXNext] = useState<boolean>(true)
	const [isDraw, setIsDraw] = useState<boolean>(false)

	const squareHandler = (id: number) => {
		const thisSquareIsActive = checkSquareIsActive(squares, id)
		if (thisSquareIsActive || winner || isDraw) return

		const newSquares = showSquare(squares, id, isXNext)
		setIsXNext(!isXNext)
		setSquares(newSquares)

		const squareLength = checkIsShowSquareLength(newSquares)
		if (squareLength < 5) return

		const winLine = calculateWinner(newSquares)

		if (winLine) {
			const winSquares = getWinSquares(squares, winLine)
			setSquares(winSquares)
			return setWinner(true)
		}

		if (squareLength === 9) return setIsDraw(true)
	}

	const restartHandler = () => {
		setSquares(
			squaresArr.map(item => {
				item.isShow = false
				item.isX = true
				item.isWin = false
				return item
			})
		)
		setWinner(false)
		setIsXNext(true)
		setIsDraw(false)
	}

	return (
		<GameContext.Provider value={{ squares, winner, restartHandler, isDraw, squareHandler, isXNext }}>
			<S.Game>
				<GameHeader />
				<GameBody />
				<GameFooter />
			</S.Game>
		</GameContext.Provider>
	)
}

interface IProps {}
export default Game

import React, { ReactNode, FC, useState } from 'react'
import { CommonContext } from 'core/context'
import { ISquare } from 'core/interfaces'
import { squaresArr } from 'core/utils'
import { calculateWinner } from 'core/utils'

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
const checkIsShowSquareLength = (squares: ISquare[]) => squares.filter(item => item.isShow).length

const ContextProvider: FC<IProps> = ({ children }) => {
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
			const winSquares = squares.map(el => {
				winLine.map(item => {
					if (el.id === item) {
						el.isWin = true
					}
				})
				return el
			})

			setSquares(winSquares)
			setWinner(true)
			return
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

	return <CommonContext.Provider value={{ squares, winner, restartHandler, isDraw, squareHandler, isXNext }}>{children}</CommonContext.Provider>
}

interface IProps {
	children: ReactNode
}

export default ContextProvider

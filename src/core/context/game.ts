import { ISquare } from 'core/interfaces'
import { createContext } from 'react'

interface IContext {
	squares: ISquare[]
	winner: boolean
	isXNext: boolean
	isDraw: boolean
	squareHandler: (id: number) => void
	restartHandler: () => void
}

const GameContext = createContext<IContext | null>(null)
export default GameContext

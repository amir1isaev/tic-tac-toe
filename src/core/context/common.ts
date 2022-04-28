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

const CommonContext = createContext<IContext | null>(null)
export default CommonContext

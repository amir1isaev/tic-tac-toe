import { createContext } from 'react'

interface IContext {
	hello: string
}

const CommonContext = createContext<IContext | null>(null)
export default CommonContext

import { GameContext } from 'core/context'
import { useContext } from 'react'

const useGameApi = () => useContext(GameContext)

export default useGameApi

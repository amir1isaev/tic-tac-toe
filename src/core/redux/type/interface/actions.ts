import EInterfaceAction from './types'

interface IIsVisible {
	type: EInterfaceAction.SET_VISIBLE
	payload: boolean
}

export type { IIsVisible }

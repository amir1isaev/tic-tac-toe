import { EInterfaceAction, InterfaceAction } from '../type/interface'

export const setVisible = (payload: boolean): InterfaceAction => ({
	type: EInterfaceAction.SET_VISIBLE,
	payload: payload,
})

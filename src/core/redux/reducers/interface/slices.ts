import { IInterfaceState } from 'core/redux/type/interface'

const setVisible = (state: IInterfaceState, payload: boolean) => {
	return {
		...state,
		isVisible: payload,
	}
}

export { setVisible }

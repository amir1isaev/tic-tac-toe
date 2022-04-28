import interfaceState from 'core/redux/state/interface'
import { EInterfaceAction, IInterfaceState, InterfaceAction } from 'core/redux/type/interface'
import { setVisible } from './slices'

const interfaceReducer = (state = interfaceState, action: InterfaceAction): IInterfaceState => {
	switch (action.type) {
		case EInterfaceAction.SET_VISIBLE:
			return setVisible(state, action.payload)

		default:
			return state
	}
}

export default interfaceReducer

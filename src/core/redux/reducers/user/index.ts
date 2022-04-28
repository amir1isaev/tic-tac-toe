import { userState } from 'core/redux/state'
import { IUserState, UserAction, EUserAction } from 'core/redux/type/user'

import { getUserSlices } from './slices'

const userReducer = (state = userState, action: UserAction): IUserState => {
	switch (action.type) {
		case EUserAction.GET_USER:
			return getUserSlices(state, action.payload)

		default:
			return state
	}
}

export default userReducer

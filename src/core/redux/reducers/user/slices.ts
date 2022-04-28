import { UserModels } from 'core/models'
import { IUserState } from 'core/redux/type/user'

const getUserSlices = (state: IUserState, payload: UserModels.User) => {
	return {
		...state,
		user: payload,
	}
}

export { getUserSlices }

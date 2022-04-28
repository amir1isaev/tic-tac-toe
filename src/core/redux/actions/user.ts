import { UserModels } from 'core/models'
import { UserAction, EUserAction } from '../type/user'

export const getUser = (payload: UserModels.User): UserAction => ({
	type: EUserAction.GET_USER,
	payload,
})

export const userLogin = (payload: any): UserAction => ({
	type: EUserAction.USER_LOGIN,
	payload,
})

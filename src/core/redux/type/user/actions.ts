import { UserModels } from 'core/models'
import EUserAction from './types'

interface IGetUser {
	type: EUserAction.GET_USER
	payload: UserModels.User
}

interface IUserLogin {
	type: EUserAction.USER_LOGIN
	payload: any
}

export type { IUserLogin, IGetUser }

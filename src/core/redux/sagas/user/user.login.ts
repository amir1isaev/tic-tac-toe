import { call } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { apiRoutes } from 'core/routes'
import { axiosResponse } from '../axiosResponce'

function* login() {
	const url = apiRoutes.authAPIRoutes.login()

	try {
		const res: AxiosResponse = yield call(axiosResponse, 'POST', url, {})
		console.log('[LOGIN RESULT]', res)
		// if (res) {
		// 	yield put(UserActions.getUser(res))
		// }
	} catch (error) {
		console.log('[ERROR]', error)
	}
}

export default login

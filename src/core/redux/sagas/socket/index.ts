import checkTypeHandler from './check.type'

import socketConnect from './connect'
import { call, fork, take, takeEvery } from 'redux-saga/effects'
import { EventChannel } from 'redux-saga'
import { message } from './emits'
import { Socket } from 'socket.io-client'
import { EStorageAction } from 'core/redux/type/storage'
import createSocketChannel from './channel'

export function* socketWatcher() {
	const socket: Socket = yield call(socketConnect)

	yield takeEvery(EStorageAction.START_GET_MESSAGE, (action: any) => message(socket, action))

	const socketChannel: EventChannel<any> = yield call(createSocketChannel, socket)

	while (true) {
		try {
			const res: EventChannel<any> = yield take(socketChannel)
			yield fork(checkTypeHandler, res)
		} catch (err) {
			console.error('[socket error]', err)
			socketChannel.close()
		}
	}
}

export default socketWatcher

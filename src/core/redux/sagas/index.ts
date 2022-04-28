import { all } from 'redux-saga/effects'
import socketWatcher from './socket'
import userWatcher from './user'

export function* rootWatcher() {
	yield all([userWatcher()])
}

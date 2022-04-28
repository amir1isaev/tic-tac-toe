import { ETheme } from 'core/enums'
import EStorageAction from './types'

interface IGetThemeType {
	type: EStorageAction.GET_THEME_TYPE
	payload: ETheme
}
interface IGetMessageType {
	type: EStorageAction.GET_MESSAGE
	payload: any
}
interface IStartGetMessageType {
	type: EStorageAction.START_GET_MESSAGE
}

export type { IGetThemeType, IGetMessageType, IStartGetMessageType }

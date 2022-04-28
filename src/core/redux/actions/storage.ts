import { ETheme } from 'core/enums'
import { StorageAction, EStorageAction } from '../type/storage'

export const getThemeType = (payload: ETheme): StorageAction => ({
	type: EStorageAction.GET_THEME_TYPE,
	payload,
})

export const getMessage = (payload: any): StorageAction => ({
	type: EStorageAction.GET_MESSAGE,
	payload,
})

export const startGetMessage = (): StorageAction => ({
	type: EStorageAction.START_GET_MESSAGE,
})

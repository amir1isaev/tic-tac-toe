import { ETheme } from 'core/enums'
import { IStorageState } from 'core/redux/type/storage'

const getThemeSlices = (state: IStorageState, payload: ETheme) => {
	return {
		...state,
		themeType: payload,
	}
}

const getMessageSlices = (state: any, payload: any) => {
	return {
		...state,
		messages: [...state.messages, payload],
	}
}

export { getThemeSlices, getMessageSlices }

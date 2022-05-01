import { ETheme } from 'core/enums'
import { IStorageState } from 'core/store/type/storage'

const getThemeSlices = (state: IStorageState, payload: ETheme) => {
	return {
		...state,
		themeType: payload,
	}
}



export { getThemeSlices }

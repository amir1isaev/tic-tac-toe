import { storageState } from 'core/redux/state'
import { IStorageState, StorageAction, EStorageAction } from 'core/redux/type/storage'
import { getMessageSlices, getThemeSlices } from './slices'

const storageReducer = (state = storageState, action: StorageAction): IStorageState => {
	switch (action.type) {
		case EStorageAction.GET_THEME_TYPE:
			return getThemeSlices(state, action.payload)

		case EStorageAction.GET_MESSAGE:
			return getMessageSlices(state, action.payload)
		default:
			return state
	}
}

export default storageReducer

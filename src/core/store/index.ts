import { combineReducers, createStore } from 'redux'
import { storageReducer } from './reducers'

const rootReducer = combineReducers({
	storage: storageReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer)

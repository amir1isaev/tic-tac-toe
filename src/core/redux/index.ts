import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './sagas'
import logger from 'redux-logger'
import { interfaceReducer, storageReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
	storage: storageReducer,
	user: userReducer,
	interface: interfaceReducer,
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, logger]

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootWatcher)

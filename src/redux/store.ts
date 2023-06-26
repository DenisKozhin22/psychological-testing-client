import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/userSlice'
import { valueOrientationsReducer } from './slices/valueOrientations.slice'

const rootReducer = combineReducers({
	user: userReducer,
	valueOrientations: valueOrientationsReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TypeRootState = ReturnType<typeof store.getState>

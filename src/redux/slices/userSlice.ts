import { IUser } from '@/types/user/IUser'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TypeRootState } from '../store'

interface IUserState {
	data: IUser | null
	isAuth?: boolean
	isLoading?: boolean
}

const initialState: IUserState = {
	data: null,
	isAuth: false,
	isLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<IUser>) => {
			state.data = action.payload
			state.isAuth = true
		},
		logout: state => {
			state.data = null
			state.isAuth = false
		},
	},
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
export const selectIsAuth = (state: TypeRootState) => Boolean(state.user.isAuth)
export const { setUserData } = userSlice.actions

import {
	IValueOrientationsGetResult,
	IValueOrientationsRespone,
	IValueOrientationsResult,
} from '@/types/quiz/IValueOrientations'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IValueOrientationsState extends IValueOrientationsRespone {
	activeBlock: number
	activeQuestion: number
	blockResult: number[]
	result: number[][]
}

const initialState: IValueOrientationsState = {
	name: '',
	blocks: [],
	activeBlock: 0,
	activeQuestion: 0,
	blockResult: [],
	result: [],
}

const valueOrientationsSlice = createSlice({
	name: 'valueOrientations',
	initialState,
	reducers: {
		setValueOrientationsState: (state, action: PayloadAction<IValueOrientationsRespone>) => {
			state.name = action.payload.name
			state.blocks = action.payload.blocks
		},
		setActiveBlock: (state, action: PayloadAction<number>) => {
			if (action.payload === 1) {
				state.activeBlock += action.payload
			} else {
				state.activeBlock = 0
			}
		},
		setActiveQuestion: (state, action: PayloadAction<number>) => {
			if (action.payload === 1) {
				state.activeQuestion += action.payload
			} else {
				state.activeQuestion = 0
			}
		},
		pushBlockResult: (state, action: PayloadAction<number>) => {
			state.blockResult.push(action.payload)
		},
		resetBlockResult: state => {
			 state.name = ''
			state.blocks = []
			state.activeBlock = 0
			state.activeQuestion = 0
			state.blockResult = []
			state.result = []
		},
		pushResult: state => {
			const block = state.blockResult
			state.result.push(block)
		},
		setValueOrientationsResult: (state, action: PayloadAction<IValueOrientationsResult>) => {
			state.result = action.payload.result
		},
	},
})

export const valueOrientationsActions = valueOrientationsSlice.actions
export const valueOrientationsReducer = valueOrientationsSlice.reducer

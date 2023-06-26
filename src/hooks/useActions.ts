import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { userActions } from '@/redux/slices/userSlice'
import { valueOrientationsActions } from '@/redux/slices/valueOrientations.slice'

const rootActions = {
	...userActions,
	...valueOrientationsActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

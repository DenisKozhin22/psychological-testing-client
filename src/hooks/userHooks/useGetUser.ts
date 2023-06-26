import { instance } from '@/Api'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'
import { IUser } from '@/types/user/IUser'

export const useGetUser = () => {
	const { setUserData } = useActions()
	const { refetch } = useQuery('getUser', () => instance.get<IUser>('/auth/user'), {
		enabled: false,
		onSuccess: data => {
			console.log(data.data)
			setUserData(data.data)
		},
	})
	return { refetcUserData: refetch }
}

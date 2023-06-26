import { instance } from '@/Api'
import { useQuery } from 'react-query'

export const useRefresh = () => {
	const { refetch, data } = useQuery('refresh', () => instance.get('/auth/refresh'), {
		enabled: false,
	})
	return { refetchTokens: refetch, refreshData: data?.data }
}

import { useQuery } from 'react-query'
import { useActions } from '../useActions'
import { AuthService } from '@/services/auth/Auth.service'
export const useLogout = () => {
	const { logout, resetBlockResult } = useActions()
	const { refetch } = useQuery('logout', () => AuthService.logout(), {
		enabled: false,
		onSuccess() {
			resetBlockResult()
			logout()
		},
	})
	return { refetchLogout: refetch }
}

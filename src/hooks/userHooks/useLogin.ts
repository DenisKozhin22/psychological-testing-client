import { ILoginProps } from '@/types/user/ILogin'
import { useMutation } from 'react-query'
import { useRouter } from 'next/dist/client/router'
import { AuthService } from '@/services/auth/Auth.service'
import { useGetUser } from './useGetUser'

export const useLogin = () => {
	const { push } = useRouter()
	const { refetcUserData } = useGetUser()
	const { mutateAsync } = useMutation('login', (data: ILoginProps) => AuthService.login(data), {
		onSuccess: () => {
			refetcUserData()
			push(`/`)
		},
	})

	return { login: mutateAsync }
}

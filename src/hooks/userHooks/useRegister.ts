import { AuthService } from '@/services/auth/Auth.service'
import { IRegisterProps } from '@/types/user/IRegister'
import { useRouter } from 'next/dist/client/router'
import { useMutation } from 'react-query'
import { useGetUser } from './useGetUser'
export const useRegister = () => {
	const { push } = useRouter()
	const { refetcUserData } = useGetUser()
	const { mutateAsync } = useMutation(
		'register',
		(data: IRegisterProps) => AuthService.register(data),
		{
			onSuccess: () => {
				refetcUserData()
				push(`/`)
			},
		},
	)
	return { registration: mutateAsync }
}

import { useAuth } from '@/hooks/userHooks/useAuth'
import { TypeComponentAuthFields } from '@/types/auth.types'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { FC } from 'react'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const user = useAuth()
	const router = useRouter()
	const { refreshToken, accessToken } = parseCookies()
	const Children = () => <>{children}</>

	if (user) {
		if (user.isAdmin) {
			return <Children />
		}

		if (isOnlyAdmin && !user.isAdmin) {
			router.pathname !== '/404' && router.replace('/404')
			return null
		}
	}

	const isUser = user && !user.isAdmin

	if (isUser && isOnlyUser) {
		return <Children />
	} else {
		router.pathname !== '/login' && router.replace('/login')
		return null
	}
}

export default CheckRole

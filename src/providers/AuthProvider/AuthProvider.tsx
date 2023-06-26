import { useAuth } from '@/hooks/userHooks/useAuth'
import { useGetUser } from '@/hooks/userHooks/useGetUser'
import { useLogout } from '@/hooks/userHooks/useLogout'
import { useRefresh } from '@/hooks/userHooks/useRefresh'
import { TypeComponentAuthFields } from '@/types/auth.types'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { FC, useEffect } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { pathname } = useRouter()

	const user = useAuth()
	const { refetcUserData } = useGetUser()
	const { refetchLogout } = useLogout()
	const { refetchTokens } = useRefresh()

	const Children = () => <>{children}</>

	useEffect(() => {
		const { refreshToken, accessToken } = parseCookies()
		if (refreshToken && !(pathname == '/register' || pathname == '/login')) {
			refetcUserData()
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const { refreshToken } = parseCookies()
		if (!refreshToken && user) {
			refetchLogout()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<Children />
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider

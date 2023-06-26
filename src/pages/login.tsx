import { GetServerSideProps, NextPage } from 'next'
import Login from '@/screens/Login/Login'
import { parseCookies } from 'nookies'

const LoginPage: NextPage = () => {
	return <Login />
}

export default LoginPage

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { refreshToken } = parseCookies(ctx)
	if (refreshToken) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}
	return {
		props: {},
	}
}

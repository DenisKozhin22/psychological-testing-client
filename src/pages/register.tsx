import Layout from '@/components/Layout/Layout'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import Register from '@/screens/Register/Register'
import { NextPage, GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

const RegisterPage: NextPage = () => {
	return <Register />
}

export default RegisterPage

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

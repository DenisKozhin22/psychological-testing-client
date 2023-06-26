import axios from 'axios'

import { parseCookies } from 'nookies'
import { IAuthResponse } from '@/types/response/AuthResponse'

export const axiosClassic = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:5000',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:5000',
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use(config => {
	const cookies = parseCookies()
	config.headers.Authorization = `Bearer ${cookies.accessToken}`
	return config
})

instance.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			try {
				originalRequest._isRetry = true
				const { data } = await axiosClassic.get<IAuthResponse>(
					'http://localhost:5000/auth/refresh',
					{
						withCredentials: true,
					},
				)
				const cookies = parseCookies()
				console.log('data', data)
				console.log('refresh', cookies)
				originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

				return instance.request(originalRequest)
			} catch (error) {
				console.log('Не авторизован')
				console.log(error)
			}
		}
	},
)

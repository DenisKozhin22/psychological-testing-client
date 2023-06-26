import { axiosClassic, instance } from '@/Api'
import { IAuthResponse } from '@/types/response/AuthResponse'
import { ILoginProps } from '@/types/user/ILogin'
import { IRegisterProps } from '@/types/user/IRegister'
import { AxiosResponse } from 'axios'

export const AuthService = {
	async login(data: ILoginProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/login', data)
	},
	async register(data: IRegisterProps): Promise<AxiosResponse<IAuthResponse>> {
		return axiosClassic.post<IAuthResponse>('/auth/register', data)
	},
	async logout(): Promise<void> {
		return instance.post('/auth/logout')
	},
	async checkAuth(): Promise<AxiosResponse<IAuthResponse>> {
		return instance.get<IAuthResponse>('/auth/refresh')
	},
}

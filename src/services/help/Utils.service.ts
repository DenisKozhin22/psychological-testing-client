import { axiosClassic } from '@/Api'
import { IDepartmentResponse } from '@/types/response/DepartmentResponse'
import { AxiosResponse } from 'axios'

export const HelpService = () => ({
	async getDepartments(): Promise<AxiosResponse<IDepartmentResponse[]>> {
		return await axiosClassic.get('/auth/getDepartment')
	},
})

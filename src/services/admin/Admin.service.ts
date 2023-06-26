import { instance } from '@/Api'
import { IValueOrientationsGetResult } from '@/types/quiz/IValueOrientations'
import { IGroups } from '@/types/response/DepartmentResponse'
import { IUser } from '@/types/user/IUser'
import { AxiosResponse } from 'axios'

export const AdminService = {
	async getGroups(department: string): Promise<AxiosResponse<IGroups[]>> {
		return instance.get<IGroups[]>(`/admin/${department}`)
	},
	async getStudents(department: string, group: string): Promise<AxiosResponse<IUser[]>> {
		return instance.get<IUser[]>(`/admin/${department}/${group}`)
	},
	async getStudentResult(
		department: string,
		group: string,
		id: string,
	): Promise<AxiosResponse<IValueOrientationsGetResult>> {
		return instance.get<IValueOrientationsGetResult>(`/admin/${department}/${group}/${id}`)
	},
}

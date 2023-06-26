import { axiosClassic } from '@/Api'
import { useQuery } from 'react-query'
import { IDepartmentResponse } from '@/types/response/DepartmentResponse'

export const useDepartments = () => {
	const { data } = useQuery('departments', () =>
		axiosClassic.get<IDepartmentResponse[]>('/auth/getDepartment'),
	)
	return { departments: data?.data }
}

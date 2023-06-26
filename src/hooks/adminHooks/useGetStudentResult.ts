import { AdminService } from '@/services/admin/Admin.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetStudentResult = (department: string, group: string, id: string) => {
	const { setValueOrientationsResult } = useActions()
	const { data } = useQuery(
		['getStudentResult', id],
		() => AdminService.getStudentResult(department, group, id),
		{
			enabled: true,
			onSuccess(data) {
				setValueOrientationsResult({ result: data?.data?.result })
			},
		},
	)

	return {
		studentsResult: data?.data,
	}
}

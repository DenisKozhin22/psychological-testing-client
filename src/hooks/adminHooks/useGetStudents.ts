import { AdminService } from '@/services/admin/Admin.service'
import { useQuery } from 'react-query'

export const useGetStudents = (department: string, group: string) => {
	const { data } = useQuery(
		['getStudents', group],
		() => AdminService.getStudents(department, group),
		{
			enabled: true,
		},
	)

	return {
		studentsList: data?.data,
	}
}

import { AdminService } from '@/services/admin/Admin.service'
import { useQuery } from 'react-query'

export const useGetGroups = (department: string) => {
	const { data } = useQuery(['getGroups', department], () => AdminService.getGroups(department), {
		enabled: true,
	})
	return {
		groupsList: data?.data,
	}
}

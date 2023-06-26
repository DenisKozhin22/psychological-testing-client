import { NextPageAuth } from '@/types/auth.types'
import Department from '@/screens/Department/Department'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/userHooks/useAuth'

const DepartmentPage: NextPageAuth = () => {
	const router = useRouter()
	const user = useAuth()
	if (user) {
		return <Department />
	} else return <div>загрузка</div>
}

DepartmentPage.isOnlyAdmin = true
export default DepartmentPage

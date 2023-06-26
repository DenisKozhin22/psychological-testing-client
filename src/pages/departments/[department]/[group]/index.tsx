import { NextPageAuth } from '@/types/auth.types'
import Group from '@/screens/Group/Group'
import { useAuth } from '@/hooks/userHooks/useAuth'

const GroupPage: NextPageAuth = () => {
	const user = useAuth()
	if (user) {
		return <Group />
	} else return <div>загрузка</div>
}

GroupPage.isOnlyAdmin = true

export default GroupPage

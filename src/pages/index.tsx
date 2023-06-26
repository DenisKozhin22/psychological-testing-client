import User from '@/screens/User/User'
import { NextPageAuth } from '@/types/auth.types'
import UserLayout from '@/components/Layout/UserLayout'

const HomePage: NextPageAuth = () => {
	return (
		<UserLayout>
			<User />
		</UserLayout>
	)
}

HomePage.isOnlyUser = true
export default HomePage

import AdminPanel from '@/components/AdminPanel/AdminPanel'
import UserInfo from '@/components/UserInfo/UserInfo'
import ValueOrientationsQuiz from '@/components/ValueOrientationsQuiz/ValueOrientationsQuiz'
import { useAuth } from '@/hooks/userHooks/useAuth'
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { FC } from 'react'
const User: FC = () => {
	const user = useAuth()

	if (user?.isAdmin) {
		return <AdminPanel />
	} else {
		return (
			<Tabs position='relative' variant='unstyled'>
				<TabList>
					<Tab>{user?.userName}</Tab>
					<Tab>Тест №1</Tab>
				</TabList>
				<TabIndicator mt='-1.5px' height='2px' bg='teal' borderRadius='1px' />
				<TabPanels>
					<TabPanel p='0'>
						<UserInfo />
					</TabPanel>
					<TabPanel p='0'>
						<ValueOrientationsQuiz />
					</TabPanel>
				</TabPanels>
			</Tabs>
		)
	}
}

export default User

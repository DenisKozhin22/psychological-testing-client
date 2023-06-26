import { useAuth } from '@/hooks/userHooks/useAuth'
import { useLogout } from '@/hooks/userHooks/useLogout'
import {
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Heading,
	Stack,
	StackDivider,
	Text,
} from '@chakra-ui/react'
import { FC } from 'react'

const UserInfo: FC = () => {
	const user = useAuth()
	const { refetchLogout } = useLogout()
	return (
		<Card maxW='full' boxShadow='none'>
			<CardHeader>
				<Heading size='md'>Личный кабинет</Heading>
			</CardHeader>
			<CardBody>
				<Stack divider={<StackDivider />} spacing='4'>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Отделение
						</Heading>
						<Text pt='2' fontSize='sm'>
							{user?.department}
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Группа
						</Heading>
						<Text pt='2' fontSize='sm'>
							{user?.group}
						</Text>
					</Box>
					<Box>
						<Heading size='xs' textTransform='uppercase'>
							Почта
						</Heading>
						<Text pt='2' fontSize='sm'>
							{user?.email}
						</Text>
					</Box>
				</Stack>
			</CardBody>
			<Divider borderColor='teal' />
			<CardFooter>
				<Button
					variant='solid'
					w='200px'
					colorScheme='teal'
					mx='auto'
					onClick={() => refetchLogout()}>
					Выйти
				</Button>
			</CardFooter>
		</Card>
	)
}

export default UserInfo

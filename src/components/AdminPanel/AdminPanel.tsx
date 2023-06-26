import { useDepartments } from '@/hooks/useDepartments'
import { Box, Heading, LinkBox, LinkOverlay, Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useLogout } from '@/hooks/userHooks/useLogout'

const AdminPanel: FC = () => {
	const { departments } = useDepartments()
	const {refetchLogout} = useLogout()
	return (
		<Box h='full'>
			<Heading textAlign='center' as='h2' size='md' py='4'>
				Отделения
			</Heading>
			<Box maxW='sm' mx='auto' display='flex' flexDirection='column' gap='2' mb='2'>
				{departments?.map(item => (
					<LinkBox
						key={item._id}
						as='article'
						maxW='sm'
						p='5'
						borderWidth='1px'
						rounded='md'
						bg='teal.500'
						color='white'
						textAlign='center'>
						<LinkOverlay as={NextLink} href={`/departments/${item.name.replace(' ', '-')}`}>
							{item.name}
						</LinkOverlay>
					</LinkBox>
				))}
			</Box>
			<Button
				variant='solid'
				display='block'
				w='200px'
				colorScheme='teal'
				mx='auto'
				onClick={() => refetchLogout()}>
				Выйти
			</Button>
		</Box>
	)
}

export default AdminPanel

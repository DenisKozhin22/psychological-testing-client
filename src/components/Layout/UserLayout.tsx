import { Container } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type UserLayoutProps = {
	children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({ children }) => {
	return (
		<Container
			maxW='1000px'
			minH='sm'
			borderRadius='md'
			p='4'
			bg='white'
			m='auto'>
			{children}
		</Container>
	)
}

export default UserLayout

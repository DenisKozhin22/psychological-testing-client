import { FC, ReactNode } from 'react'

// Chakra-UI
import { Container } from '@chakra-ui/react'

type LayoutProps = {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<Container maxW='1200px' minH='100vh' display='flex' p='2' flexDirection='column'>
			{children}
		</Container>
	)
}

export default Layout

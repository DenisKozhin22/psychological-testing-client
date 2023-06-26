import { theme } from '@/chakra-ui/theme'
import Layout from '@/components/Layout/Layout'
import { store } from '@/redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@/types/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider

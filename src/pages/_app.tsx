import '@/styles/globals.scss'
import { AppProps } from 'next/app'
import MainProvider from '@/providers/MainProvider'
import { TypeComponentAuthFields } from '@/types/auth.types'

type TypeAppProps = AppProps & TypeComponentAuthFields

function App({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default App

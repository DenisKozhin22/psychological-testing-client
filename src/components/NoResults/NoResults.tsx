import { Alert, AlertIcon } from '@chakra-ui/react'
import { FC } from 'react'

const NoResults: FC = () => {
	return (
		<Alert status='error' maxW='sm' display='flex' justifyContent='center' m='0 auto' borderRadius='md'>
			<AlertIcon />
			Результаты отсутствуют
		</Alert>
	)
}

export default NoResults

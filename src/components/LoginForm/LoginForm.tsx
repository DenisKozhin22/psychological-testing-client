import { FC } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

// Chakra-UI
import { Input, FormControl, FormLabel, Button, Box, Flex } from '@chakra-ui/react'
import { ILoginProps } from '@/types/user/ILogin'

import { useLogin } from '@/hooks/userHooks/useLogin'
import { useRouter } from 'next/router'
const LoginForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginProps>({
		mode: 'onSubmit',
	})
	const { login } = useLogin()
	const router = useRouter()

	const onSubmit: SubmitHandler<ILoginProps> = async data => {
		await login(data)
	}
	return (
		<Box
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			bg='white'
			w='xl'
			p='4'
			m='auto'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			borderRadius='md'>
			<FormControl display='flex' flexDirection='column' gap='10px'>
				<FormLabel>Email</FormLabel>
				<Input
					variant='main'
					placeholder='Введите email'
					size='lg'
					type='email'
					borderColor={errors?.email ? 'red.500' : ''}
					{...register('email')}
				/>
				<FormLabel>Пароль</FormLabel>
				<Input
					variant='main'
					placeholder='Введите пароль'
					size='lg'
					type='password'
					borderColor={errors?.password ? 'red.500' : ''}
					{...register('password')}
				/>
			</FormControl>
			<Flex gap='2'>
				<Button mt={4} minW='200px' colorScheme='teal' size='lg' type='submit'>
					Войти
				</Button>
				<Button
					mt={4}
					minW='200px'
					colorScheme='teal'
					size='lg'
					onClick={() => router.push('/register')}>
					Зарегистрироваться
				</Button>
			</Flex>
		</Box>
	)
}

export default LoginForm

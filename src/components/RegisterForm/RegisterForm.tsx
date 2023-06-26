import { FC, useState, ChangeEvent } from 'react'

// Chakra-UI
import { Input, FormControl, FormLabel, Button, Box, Select, Flex } from '@chakra-ui/react'

import { IRegisterProps } from '@/types/user/IRegister'
import { useDepartments } from '@/hooks/useDepartments'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRegister } from '@/hooks/userHooks/useRegister'
import { IDepartmentResponse } from '@/types/response/DepartmentResponse'
import { useRouter } from 'next/router'

interface IGroup {
	value: string
	_id: string
}

const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<IRegisterProps>({
		mode: 'onSubmit',
	})

	const [department, setDepartment] = useState('')
	const [groups, setGroups] = useState<IGroup[]>([])

	const { departments } = useDepartments()
	const { registration } = useRegister()
	const router = useRouter()

	const onSubmit: SubmitHandler<IRegisterProps> = async data => {
		await registration(data)
		console.log(data)
	}
	const handleDepartment = (e: ChangeEvent<HTMLSelectElement>): void => {
		setDepartment(e.target.value)

		const findGroups = departments?.find(
			(item: IDepartmentResponse) => item.name === e.target.value,
		)
		if (findGroups) setGroups(findGroups.groups)
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
				<FormLabel>Имя</FormLabel>
				<Input
					variant='main'
					placeholder='Введите имя'
					size='lg'
					type='text'
					borderColor={errors?.userName ? 'red.500' : ''}
					{...register('userName', {
						required: 'Введите имя!',
					})}
				/>
				<FormLabel>Фамилия</FormLabel>
				<Input
					variant='main'
					placeholder='Введите фамилию'
					size='lg'
					type='text'
					borderColor={errors?.userSurName ? 'red.500' : ''}
					{...register('userSurName', {
						required: 'Введите фамилию!',
					})}
				/>

				<FormLabel>Email</FormLabel>
				<Input
					variant='main'
					placeholder='Введите email'
					size='lg'
					type='email'
					borderColor={errors?.email ? 'red.500' : ''}
					{...register('email', {
						required: 'Введите почту!',
					})}
				/>

				<FormLabel>Пароль</FormLabel>
				<Input
					variant='main'
					placeholder='Введите пароль'
					size='lg'
					type='password'
					borderColor={errors?.password ? 'red.500' : ''}
					{...register('password', {
						required: 'Введите пароль!',
					})}
				/>

				<FormLabel>Отделение</FormLabel>
				<Controller
					name='department'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange }, fieldState: { error } }) => (
						<Select
							variant='main'
							placeholder='Выберите отделение'
							size='lg'
							borderColor={error ? 'red.500' : ''}
							onChange={e => {
								onChange(e.target.value)
								handleDepartment(e)
								console.log(e.target.value)
							}}>
							{departments?.map(item => (
								<option key={item._id} value={item.name}>
									{item.name}
								</option>
							))}
						</Select>
					)}
				/>
				<FormLabel>Группа</FormLabel>
				<Controller
					name='group'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange }, fieldState: { error } }) => (
						<Select
							variant='main'
							placeholder='Выберите группу'
							size='lg'
							borderColor={error ? 'red.500' : ''}
							onChange={e => {
								onChange(e.target.value)
								console.log(e.target.value)
							}}>
							{department.length > 0 &&
								groups.map(item => (
									<option key={item.value} value={item.value}>
										{item.value}
									</option>
								))}
						</Select>
					)}
				/>
			</FormControl>
			<Flex gap='2'>

			<Button mt={4} minW='200px' colorScheme='teal' size='lg' type='submit'>
				Зарегистрироваться
			</Button>
			<Button
				mt={4}
				minW='200px'
				colorScheme='teal'
				size='lg'
				onClick={() => router.push('/login')}>
				Войти
			</Button>
					</Flex>
		</Box>
	)
}

export default RegisterForm

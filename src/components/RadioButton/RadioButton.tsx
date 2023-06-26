import { Box, UseRadioGroupReturn, UseRadioProps, useRadio } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type RadioButtonProps = UseRadioProps & {
	children: ReactNode
}
const RadioButton: FC<RadioButtonProps> = props => {
	const { getInputProps, getRadioProps } = useRadio(props)

	const input = getInputProps()
	const checkbox = getRadioProps()

	return (
		<Box
			as='label'
			width='full'
			css={{
				marginInlineStart: '0 !important ',
			}}>
			<input {...input} />
			<Box
				{...checkbox}
				cursor='pointer'
				borderWidth='1px'
				borderRadius='md'
				boxShadow='md'
				_checked={{
					bg: 'teal.600',
					color: 'white',
					borderColor: 'teal.500',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={5}>
				{props.children}
			</Box>
		</Box>
	)
}

export default RadioButton

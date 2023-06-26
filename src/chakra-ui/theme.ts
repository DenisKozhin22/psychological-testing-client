import { extendTheme } from '@chakra-ui/react'
import { InputTheme as Input } from './componentsThemes/inputTheme'
import { SelectTheme as Select } from './componentsThemes/selectTheme'

export const theme = extendTheme({
	components: {
		Input,
		Select,
	},
	styles: {
		global: {
			body: {
				bg: 'gray.100',
			},
		},
	},
})

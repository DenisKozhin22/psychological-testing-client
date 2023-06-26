import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { FC } from 'react'
import NoResults from '../NoResults/NoResults'

const ValueOrientationTableResult: FC<{ result: number[][] | undefined }> = ({ result }) => {
	if (result) {
		const amountBlockResult = (block: number[]) => {
			return block?.reduce((res, item) => (res += item))
		}
		const resultAmount = result?.reduce((arr, cur) => {
			return (
				arr +
				cur.reduce((arr2, cur2) => {
					return arr2 + cur2
				}, 0)
			)
		}, 0)

		const resultBlock1 = amountBlockResult(result[0])
		const resultBlock2 = amountBlockResult(result[1])
		const resultBlock3 = amountBlockResult(result[2])
		const resultBlock4 = amountBlockResult(result[3])
		const resultBlock5 = amountBlockResult(result[4])

		const colorsResults = {
			block1:
				resultBlock1 >= 8
					? 'teal.500'
					: resultBlock1 >= 5 && resultBlock1 <= 7
					? 'yellow.300'
					: resultBlock1 <= 4
					? 'red.300'
					: '',
			block2:
				resultBlock2 >= 8
					? 'teal.500'
					: resultBlock2 >= 4 && resultBlock2 <= 7
					? 'yellow.300'
					: resultBlock2 <= 3
					? 'red.300'
					: '',
			block3:
				resultBlock3 >= 8
					? 'teal.500'
					: resultBlock3 >= 4 && resultBlock3 <= 7
					? 'yellow.300'
					: resultBlock3 <= 3
					? 'red.300'
					: '',
			block4:
				resultBlock4 >= 9
					? 'teal.500'
					: resultBlock4 >= 4 && resultBlock4 <= 8
					? 'yellow.300'
					: resultBlock4 <= 3
					? 'red.300'
					: '',

			block5:
				resultBlock5 >= 9
					? 'teal.500'
					: resultBlock5 >= 6 && resultBlock5 <= 8
					? 'yellow.300'
					: resultBlock5 <= 5
					? 'red.300'
					: '',
		}

		return (
			<TableContainer border='1px solid' borderColor='gray.200' borderRadius='md' p='2'>
				<Table size='sm' maxW='100%'>
					<Thead>
						<Tr>
							<Th colSpan={1}>Название блока</Th>
							<Th textAlign='center' colSpan={10}>
								Показатели ценностных ориентации
							</Th>
							<Th textAlign='end' colSpan={1}>
								Результаты
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td colSpan={1} whiteSpace='pre-wrap'>
								1. Познание
							</Td>
							{result[0]?.map((item, i) => (
								<Td key={i} rowSpan={1} colSpan={1} textAlign='center'>
									{item}
								</Td>
							))}
							<Td textAlign='end' bg={colorsResults.block1}>
								{resultBlock1}
							</Td>
						</Tr>
						<Tr>
							<Td colSpan={1} whiteSpace='pre-wrap'>
								2. Я-ценность
							</Td>
							{result[1]?.map((item, i) => (
								<Td key={i} rowSpan={1} colSpan={1} textAlign='center'>
									{item}
								</Td>
							))}
							<Td textAlign='end' bg={colorsResults.block2}>
								{resultBlock2}
							</Td>
						</Tr>
						<Tr>
							<Td colSpan={1} whiteSpace='pre-wrap'>
								3. Другой-ценность
							</Td>
							{result[2]?.map((item, i) => (
								<Td key={i} rowSpan={1} colSpan={1} textAlign='center'>
									{item}
								</Td>
							))}
							<Td textAlign='end' bg={colorsResults.block3}>
								{resultBlock3}
							</Td>
						</Tr>
						<Tr>
							<Td colSpan={1} whiteSpace='pre-wrap'>
								4. Общественно полезная деятельность
							</Td>
							{result[3]?.map((item, i) => (
								<Td key={i} rowSpan={1} colSpan={1} textAlign='center'>
									{item}
								</Td>
							))}
							<Td textAlign='end' bg={colorsResults.block4}>
								{resultBlock4}
							</Td>
						</Tr>
						<Tr>
							<Td colSpan={1} whiteSpace='pre-wrap'>
								5. Ответственность
							</Td>
							{result[4]?.map((item, i) => (
								<Td key={i} rowSpan={1} colSpan={1} textAlign='center'>
									{item}
								</Td>
							))}
							<Td textAlign='end' bg={colorsResults.block5}>
								{resultBlock5}
							</Td>
						</Tr>
					</Tbody>
					<Tfoot>
						<Tr>
							<Th colSpan={11}></Th>
							<Th colSpan={1} textAlign='end'>
								Сумма: {resultAmount}
							</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		)
	} else {
		return <NoResults />
	}
}

export default ValueOrientationTableResult

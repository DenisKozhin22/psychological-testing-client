import { useGetValueOrientations } from '@/hooks/quizHooks/useGetValueOrientations'
import { Button, HStack, Heading, Tag } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'

import { useAppSelector } from '@/hooks/useAppSelector'
import ValueOrientationsQuestion from './ValueOrientationsQuestion'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useSendValueOrientationResult } from '@/hooks/quizHooks/useSendValueOrientationResult'
import { useGetValueOrientationsResult } from '@/hooks/quizHooks/useGetValueOrientationResult'
import ValueOrientationTableResult from './ValueOrientationTableResult'

const ValueOrientationsQuiz: FC = () => {
	useGetValueOrientations()

	const { sendValueOriantationResult } = useSendValueOrientationResult()

	useGetValueOrientationsResult()
	const { name, activeBlock, activeQuestion, result, blocks } = useAppSelector(
		state => state.valueOrientations,
	)

	const [isCompleted, setIsCompleted] = useState<boolean>(false)

	useEffect(() => {
		if (isCompleted) {
			sendValueOriantationResult()
		}
	}, [isCompleted, sendValueOriantationResult])
	return (
		<>
			<HStack spacing={1} mb='4' display='flex' justifyContent='space-between' flexWrap='wrap'>
				<Heading as='h2' size='md' py='4'>
					{name}
				</Heading>
				{result?.length < 5 && (
					<HStack>
						<Tag size='lg' variant='solid' colorScheme='teal'>
							Блок: {activeBlock + 1}
						</Tag>
						<Tag size='lg' variant='solid' colorScheme='teal'>
							Вопрос: {activeQuestion + 1}
						</Tag>
					</HStack>
				)}
			</HStack>
			{result?.length < blocks.length ? (
				<ValueOrientationsQuestion setIsCompleted={setIsCompleted} />
			) : (
				<ValueOrientationTableResult result={result} />
			)}
		</>
	)
}

export default ValueOrientationsQuiz

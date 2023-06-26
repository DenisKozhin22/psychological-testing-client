import { Button, HStack, useRadioGroup, useToast } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import RadioButton from '../RadioButton/RadioButton'
import { useAppSelector } from '@/hooks/useAppSelector'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useActions } from '@/hooks/useActions'
import { useSendValueOrientationResult } from '@/hooks/quizHooks/useSendValueOrientationResult'

interface IValueOrientationsQuestion {
	setIsCompleted: Dispatch<SetStateAction<boolean>>
}

const ValueOrientationsQuestion: FC<IValueOrientationsQuestion> = ({ setIsCompleted }) => {
	const toast = useToast()

	const { blocks, activeBlock, activeQuestion, result } = useAppSelector(
		state => state.valueOrientations,
	)
	const { setActiveQuestion, setActiveBlock, pushResult, pushBlockResult, resetBlockResult } =
		useActions()

	const [answer, setAnswer] = useState<null | number>(null)

	const handleNextQuestion = () => {
		if (answer !== null) {
			if (activeQuestion === 9 && activeBlock + 1 === blocks.length) {
				pushBlockResult(answer)
				pushResult()
				resetBlockResult()
				setActiveBlock(0)
				setActiveQuestion(0)
				setIsCompleted(true)
			} else {
				if (activeQuestion === 9) {
					pushBlockResult(answer)
					setAnswer(null)
					pushResult()
					setActiveBlock(1)
					setActiveQuestion(0)
					resetBlockResult()
				} else {
					setActiveQuestion(1)
					pushBlockResult(answer)
					setAnswer(null)
				}
			}
		} else {
			toast({
				title: `Выберите ответ`,
				position: 'top',
				status: 'error',
				isClosable: true,
			})
		}
	}
	const { getRootProps, getRadioProps } = useRadioGroup({
		name: `question-${activeBlock}-${activeQuestion}`,
		onChange: value => setAnswer(Number(value)),
	})
	const group = getRootProps()

	return (
		<>
			<HStack {...group} flexDirection='column' gap='2' mb='4'>
				{blocks[activeBlock]?.questions[activeQuestion]?.options.map(question => {
					const radio = getRadioProps({ value: question.value.toString() })
					return (
						<RadioButton
							key={question.text}
							{...radio}
							value={question.value.toString()}
							isChecked={question.value === answer}>
							{question.text}
						</RadioButton>
					)
				})}
			</HStack>
			<Button
				onClick={handleNextQuestion}
				rightIcon={<ArrowForwardIcon />}
				display='block'
				ml='auto'
				colorScheme='teal'
				variant='solid'>
				Ответить
			</Button>
		</>
	)
}

export default ValueOrientationsQuestion

import { QuizService } from '@/services/quiz/Quiz.service'
import { useMutation } from 'react-query'
import { useAppSelector } from '../useAppSelector'
import { useActions } from '../useActions'

export const useSendValueOrientationResult = () => {
	const { setValueOrientationsResult } = useActions()
	const { result } = useAppSelector(state => state.valueOrientations)
	const { mutateAsync, data } = useMutation(
		'sendValueOriantationResult',
		() => QuizService.sendValueOrientationResult({ result }),
		{
			onSuccess: data => {
				if (data.data?.result) {
					setValueOrientationsResult(data.data)
				}
			},
		},
	)

	return { sendValueOriantationResult: mutateAsync, valueOriantationResult: data?.data }
}

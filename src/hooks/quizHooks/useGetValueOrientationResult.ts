import { QuizService } from '@/services/quiz/Quiz.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetValueOrientationsResult = () => {
	const { setValueOrientationsResult } = useActions()
	const { data, refetch } = useQuery(
		'getValueOrientationsResult',
		() => QuizService.getValueOrientationResult(),
		{
			onSuccess: data => {
				if (data.data?.result) {
					setValueOrientationsResult(data.data)
				}
			},
		},
	)

	return {
		valueOrientationsResult: data?.data?.result,
		refetchValueOrientationsResult: refetch,
	}
}

import { QuizService } from '@/services/quiz/Quiz.service'
import { useQuery } from 'react-query'
import { useActions } from '../useActions'

export const useGetValueOrientations = () => {
	const { setValueOrientationsState } = useActions()
	useQuery('getValueOrientations', () => QuizService.getValueOrientations(), {
		onSuccess: data => {
			setValueOrientationsState(data.data)
		},
	})

	// return { valueOrientationsQuiz: data?.data }
}

import { instance } from '@/Api'
import {
	IValueOrientationsGetResult,
	IValueOrientationsRespone,
	IValueOrientationsResult,
} from '@/types/quiz/IValueOrientations'
import { AxiosResponse } from 'axios'

export const QuizService = {
	async getValueOrientations(): Promise<AxiosResponse<IValueOrientationsRespone>> {
		return instance.get<IValueOrientationsRespone>('/quiz/value-orientations')
	},
	async sendValueOrientationResult(
		data: IValueOrientationsResult,
	): Promise<AxiosResponse<IValueOrientationsResult>> {
		return instance.post<IValueOrientationsResult>('/quiz/results-value-orientations', data)
	},
	async getValueOrientationResult(): Promise<AxiosResponse<IValueOrientationsGetResult>> {
		return instance.get<IValueOrientationsGetResult>('/quiz/results-value-orientations')
	},
}

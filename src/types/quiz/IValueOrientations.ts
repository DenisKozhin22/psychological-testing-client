export interface IValueOrientationsOption {
	text: string
	value: number
}

export interface IValueOrientationsOptions {
	options: IValueOrientationsOption[]
}

export interface IValueOrientationsQuestions {
	questions: IValueOrientationsOptions[]
}

export interface IValueOrientationsRespone {
	name: string
	blocks: IValueOrientationsQuestions[]
}

export interface IValueOrientationsResult {
	result: number[][]
}

export interface IValueOrientationsGetResult {
	userID: string
	userSurName: string
	userName: string
	result: number[][]
}

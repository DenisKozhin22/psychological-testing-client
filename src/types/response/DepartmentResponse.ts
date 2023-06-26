export interface IGroups {
	value: string
	_id: string
}

export interface IDepartmentResponse {
	_id: string
	name: string
	groups: IGroups[]
}

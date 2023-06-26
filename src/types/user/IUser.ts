export interface IUser {
	_id: string
	userName: string
	userSurName: string
	email: string
	passwordHash: string
	department: string
	group: string
	isAdmin: boolean
	isAuth?: boolean
}

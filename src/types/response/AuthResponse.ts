
export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: {
		email: string
		id: string
	}
}

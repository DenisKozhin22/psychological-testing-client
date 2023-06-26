import { IAuthRespone } from '../response/AuthResponse'
import { AxiosResponse } from 'axios'
import { IRegisterProps } from './IRegister'

export type TypeRegisterFunction = (data: IRegisterProps) => Promise<AxiosResponse<IAuthRespone>>

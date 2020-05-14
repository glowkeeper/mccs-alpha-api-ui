import { PayloadProps } from '../types'

export interface SignupProps {
  email: string
  password: string
}

export interface UserProps {
    email: string
    jwt: string
    info: object
}

export interface UserInfoProps extends PayloadProps {
  data: UserProps
}

export const enum AccountActionTypes {
  ACCOUNT_INIT = '@@AccountActionTypes/ACCOUNT_INIT',
  ACCOUNT_SUCCESS = '@@AccountActionTypes/ACCOUNT_SUCCESS',
  ACCOUNT_FAILURE = '@@AccountActionTypes/ACCOUNT_FAILURE'
}

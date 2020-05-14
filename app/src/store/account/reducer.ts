import { ActionProps } from '../types'
import { AccountActionTypes, UserInfoProps } from './types'

const initialState: UserInfoProps = {
  data: {
    email: "",
    jwt: "",
    info: {}
  }
}

export const reducer = (state: UserInfoProps = initialState, action: ActionProps): UserInfoProps => {

  switch (action.type) {
    case AccountActionTypes.ACCOUNT_INIT: {
      const data = (action.payload as UserInfoProps)
      return data
    }
    case AccountActionTypes.ACCOUNT_SUCCESS:
    case AccountActionTypes.ACCOUNT_FAILURE: {
      const data = (action.payload as UserInfoProps)
      return {...state, ...data}
    }
    default:
      return state
  }
}

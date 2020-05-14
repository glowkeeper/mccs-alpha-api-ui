import { ApplicationState, ActionProps, PayloadProps, AppDispatch } from '../types'
import { write } from '../actions'

import { AccountActionTypes, UserProps } from './types'

export const initialise = () => {
  return async (dispatch: AppDispatch) => {
    const initData: UserProps = {
        email: "",
        jwt: "",
        info: {}
    }
    await dispatch(write({data: initData})(AccountActionTypes.ACCOUNT_INIT))
  }
}

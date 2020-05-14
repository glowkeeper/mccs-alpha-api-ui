import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { FormProps } from './helpers/forms/types'
import { InfoPageProps } from './info/types'
import { UserInfoProps } from './account/types'

export interface ApplicationState {
  info: InfoPageProps
  forms: FormProps
  user: UserInfoProps
}

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}

export type AppDispatch = ThunkDispatch<ApplicationState, any, ActionProps>

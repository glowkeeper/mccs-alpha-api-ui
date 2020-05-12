import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from './store'

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}

export type AppDispatch = ThunkDispatch<ApplicationState, any, ActionProps>

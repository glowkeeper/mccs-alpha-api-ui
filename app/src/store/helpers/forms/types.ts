import { PayloadProps } from '../../types'

export interface TxData {
  summary: string,
  info: object
}

export interface FormData {
  submitFunc: Function
  resetFunc: Function
  data: TxData
}

export interface FormProps extends PayloadProps {
  data: FormData
}

export const enum FormActionTypes {
  FORM_INIT = '@@FormActionTypes/FORM_INIT',
  FORM_SUCCESS = '@@FormActionTypes/FORM_SUCCESS',
  FORM_FAILURE = '@@FormActionTypes/FORM_FAILURE'
}

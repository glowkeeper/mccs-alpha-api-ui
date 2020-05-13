import { PayloadProps } from '../../types'

export interface TxData {
  summary: string,
  info: object
}

export interface FormProps extends PayloadProps {
  data: TxData
}

export const enum FormActionTypes {
  FORM_INIT = '@@FormActionTypes/FORM_INIT',
  FORM_SUCCESS = '@@FormActionTypes/FORM_SUCCESS',
  FORM_FAILURE = '@@FormActionTypes/FORM_FAILURE'
}

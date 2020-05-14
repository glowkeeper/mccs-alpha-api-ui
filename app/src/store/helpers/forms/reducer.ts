import { ActionProps } from '../../types'
import { FormActionTypes, FormProps } from './types'

const initialState: FormProps = {
  data: {
    code: 0,
    summary: "",
    info: {}
  }
}

export const reducer = (state: FormProps = initialState, action: ActionProps): FormProps => {

  switch (action.type) {
    case FormActionTypes.FORM_INIT: {
      const data = (action.payload as FormProps)
      return data
    }
    case FormActionTypes.FORM_SUCCESS:
    case FormActionTypes.FORM_FAILURE: {
      const data = (action.payload as FormProps)
      return {...state, ...data}
    }
    default:
      return state
  }
}

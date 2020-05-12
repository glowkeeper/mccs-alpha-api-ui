import { ApplicationState } from '../../store'
import { ActionProps, PayloadProps, AppDispatch } from '../../types'
import { write } from '../../actions'

import { FormActionTypes, FormData } from './types'

export const setFormFunctions = (formProps: FormData) => {
  return async (dispatch: AppDispatch) => {
    const formFunctions: FormData = {
      submitFunc: formProps.submitFunc,
      resetFunc: formProps.resetFunc,
      data: formProps.data
    }
    await dispatch(write({data: formFunctions})(FormActionTypes.FORM_INIT))
  }
}

import { ApplicationState, ReduxDispatch } from '../../../store'

import { write } from '../../actions'

import { ActionProps, PayloadProps } from '../../types'
import { FormActionTypes, FormData } from './types'

export const setFormFunctions = (formProps: FormData) => {
  return async (dispatch: ReduxDispatch) => {
    const formFunctions: FormData = {
      submitFunc: formProps.submitFunc,
      resetFunc: formProps.resetFunc
    }
    await dispatch(write({data: formFunctions})(FormActionTypes.FORMFUNCTION_SUCCESS))
  }
}

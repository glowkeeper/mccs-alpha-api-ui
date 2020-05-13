import { ApplicationState } from '../../store'
import { ActionProps, PayloadProps, AppDispatch } from '../../types'
import { write } from '../../actions'

import { FormActionTypes, TxData } from './types'

export const initialise = () => {
  return async (dispatch: AppDispatch) => {
    const initData: TxData = {
        summary: ""
    }
    await dispatch(write({data: initData})(FormActionTypes.FORM_INIT))
  }
}

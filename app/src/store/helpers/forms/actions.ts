import { ApplicationState, ActionProps, PayloadProps, AppDispatch } from '../../types'
import { write } from '../../actions'

import { FormActionTypes, TxData } from './types'

export const initialise = () => {
  return async (dispatch: AppDispatch) => {
    const initData: TxData = {
        code: 0,
        summary: "",
        info: {}
    }
    await dispatch(write({data: initData})(FormActionTypes.FORM_INIT))
  }
}

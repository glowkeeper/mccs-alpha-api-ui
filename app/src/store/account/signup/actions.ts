import { ApplicationState } from '../../store'
import { ActionProps, AppDispatch } from '../../types'

import { write } from '../../actions'

import { SignupProps } from '../types'
import { FormActionTypes, TxData } from '../../helpers/forms/types'

import { Account } from '../../../utils/strings'
import { Remote } from '../../../utils/config'

export const signup = (details: SignupProps) => {
  return async (dispatch: AppDispatch) => {

    let actionType = FormActionTypes.FORM_FAILURE
    let txData: TxData = {
        summary: "",
        info: {}
    }
    try {
      // set(bytes32 _reference, bytes32 _orgRef, bytes32 _reportingOrgRef, bytes32 _version, bytes32 _generatedTime)
      //const apiCall = await ...
      const response = await fetch(`${Remote.secure}${Remote.server}:${Remote.port}${Remote.signup}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: details.email,
  	        password: details.password,
        })
      })
      txData = {
        summary: `${Account.signupSuccess}`,
        info: response.json()
      }
      actionType = FormActionTypes.FORM_SUCCESS
    } catch (error) {
      txData = {
          summary: `${Account.signupFail}, error`,
          info:  {}
      }
      console.log(`${Account.signupFail}`, error)
    }

    dispatch(write({data: {data: txData}})(actionType))
  }
}

import { ApplicationState } from '../../store'
import { ActionProps, AppDispatch } from '../../types'

import { write } from '../../actions'

import { SignupProps } from '../types'
import { FormActionTypes, TxData } from '../../helpers/forms/types'

import { Account } from '../../../config/strings'
import { Remote, Paths } from '../../../config/paths'
import { history } from '../../../utils/history'

export const signup = (details: SignupProps) => {
  return async (dispatch: AppDispatch) => {

        let actionType = FormActionTypes.FORM_FAILURE
        let txData: TxData = {
            summary: "",
            info: {}
        }

        console.log(details)

      // set(bytes32 _reference, bytes32 _orgRef, bytes32 _reportingOrgRef, bytes32 _version, bytes32 _generatedTime)
      //const apiCall = await ...
      /*fetch(`${Remote.secure}${Remote.server}:${Remote.port}${Remote.signup}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          txData = {
            summary: `${Account.signupSuccess}`,
            info: data
          }
          actionType = FormActionTypes.FORM_SUCCESS
          history.push(`${Paths.home}`)
      })
     .catch(error => {
          txData = {
              summary: `${Account.signupFail}, error`,
              info:  {}
          }
          history.push(`${Paths.signup}`)
          console.log(`${Account.signupFail}`, error)
     })*/

     dispatch(write({data: {data: txData}})(actionType))
  }
}

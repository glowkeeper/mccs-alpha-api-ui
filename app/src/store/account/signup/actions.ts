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
      const url = `${Remote.insecure}${Remote.server}${Remote.signup}`
      console.log("URL: ", url)
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
          console.log('Success:', data);
          const txData = {
            summary: `${Account.signupSuccess}`,
          }
          actionType = FormActionTypes.FORM_SUCCESS
          history.push(`${Paths.home}`)
          dispatch(write({data: {data: txData}})(actionType))
      })
     .catch(error => {
         //console.log("error; ", error.message)
          const txData = {
              summary: `${Account.signupFail}: ${error.message}`
          }
          dispatch(write({data: txData})(actionType))
          //history.push(`${Paths.signup}`)
          //console.log(`${Account.signupFail}`, error.message)
     })
  }
}

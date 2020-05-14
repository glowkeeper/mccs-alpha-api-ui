import { ApplicationState, ActionProps, AppDispatch } from '../../types'
import { SignupProps, AccountActionTypes } from '../types'
import { FormActionTypes, TxData } from '../../helpers/forms/types'
import { UserProps } from '../types'

import { write } from '../../actions'

import { Account } from '../../../config/strings'
import { Remote, Paths } from '../../../config/paths'
import { history } from '../../../utils/history'

export const signup = (details: SignupProps) => {
  return async (dispatch: AppDispatch) => {

      let status = 200
      let statusText = "Success"
      let d = new Date(Date.now())
      let dateText = d.toString()

      const url = `${Remote.insecure}${Remote.server}${Remote.signup}`
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(response => {
        if (!response.ok) {
            status = response.status
            statusText = response.statusText
            return response.json()
            .then(data => {
                const txData = {
                    code: status,
                    summary: `${Account.errorSignup}: ${statusText} at ${dateText}`,
                    info: data
                }
                dispatch(write({data: txData})(FormActionTypes.FORM_FAILURE))
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
          const userData = {
            email: details.email,
            jwt: data.data.token,
            info: {}
          }
          dispatch(write({data: userData})(AccountActionTypes.ACCOUNT_INIT))
          history.push(`${Paths.user}`)
      })
     .catch(error => {
          console.log(`${Account.errorSignup}: ${error.message} at ${dateText}`)
     })
  }
}

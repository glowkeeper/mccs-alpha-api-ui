import { ApplicationState, ActionProps, AppDispatch } from '../../types'
import { SignupProps, AccountActionTypes, UserProps } from '../types'
import { FormActionTypes, TxData } from '../../helpers/forms/types'
import { write } from '../../actions'

import { Account, Remote, Local, Misc } from '../../../config'
import { history } from '../../../utils/history'

export const signup = (details: SignupProps) => {
  return async (dispatch: AppDispatch) => {

      let d = new Date(Date.now())
      let dateText = d.toString()
      let txData = {
          code: 404,
          summary: `${Account.errorSignup}: Failed to fetch at ${dateText}`,
          info: {}
      }

      const url = `${Remote.secure}${Remote.server}${Remote.signup}`
      //console.log('URL: ', url)
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      })
      .then(response => {
        if (!response.ok) {
            const status = response.status
            const statusText = response.statusText
            return response.json()
            .then(data => {
                txData = {
                    code: status,
                    summary: `${Account.errorSignup}: ${statusText} at ${dateText}`,
                    info: data
                }
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
          txData = {
              code: 200,
              summary: `${Account.successSignup}`,
              info: {}
          }
          const userData = {
            email: details.email,
            jwt: data.data.token,
            info: {}
          }
          dispatch(write({data: txData})(FormActionTypes.FORM_SUCCESS))
          dispatch(write({data: userData})(AccountActionTypes.ACCOUNT_INIT))
          setTimeout(() => {
              history.push(`${Local.user}`)
          }, Misc.successSignupDelay)
      })
     .catch(error => {
         //console.log(`${Account.errorSignup}: ${error.message} at ${dateText}`)
         dispatch(write({data: txData})(FormActionTypes.FORM_FAILURE))
     })
  }
}

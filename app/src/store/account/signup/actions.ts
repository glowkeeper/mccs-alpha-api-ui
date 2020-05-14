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

      let status = 200
      let statusText = "Success"
      let d = new Date(Date.now())
      let dateText = d.toString()

    let actionType = FormActionTypes.FORM_FAILURE
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
                console.log("data: ", data)
                const txData = {
                    code: status,
                    summary: `${Account.signupFail}: ${statusText} at ${dateText}`,
                    info: data
                }
                dispatch(write({data: txData})(actionType))
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
          console.log("data: ", data)
          const txData = {
              code: status,
              summary: `${Account.signupSuccess}: ${statusText} at ${dateText}`,
              info: data
          }
          actionType = FormActionTypes.FORM_SUCCESS
          history.push(`${Paths.home}`)
          dispatch(write({data: {data: txData}})(actionType))
      })
     .catch(error => {
          console.log(`${Account.signupFail}: ${error.message} at ${dateText}`)
     })
  }
}

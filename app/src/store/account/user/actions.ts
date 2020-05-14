import { ApplicationState, ActionProps, AppDispatch } from '../../types'

import { write } from '../../actions'

import { UserProps, AccountActionTypes } from '../types'
import { FormActionTypes, TxData } from '../../helpers/forms/types'

import { Account } from '../../../config/strings'
import { Remote, Paths } from '../../../config/paths'
import { history } from '../../../utils/history'

export const getInfo = (details: UserProps) => {
  return async (dispatch: AppDispatch) => {

      let status = 200
      let statusText = "Success"
      let d = new Date(Date.now())
      let dateText = d.toString()

      const url = `${Remote.insecure}${Remote.server}${Remote.user}`
      fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${details.jwt}`
        }
      })
      .then(response => {
        if (!response.ok) {
            status = response.status
            statusText = response.statusText
            return response.json()
            .then(data => {
                const txData = {
                    code: status,
                    summary: `${Account.errorUser}: ${statusText} at ${dateText}`,
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
              jwt: details.jwt,
              info: data.data
          }
          dispatch(write({data: userData})(AccountActionTypes.ACCOUNT_SUCCESS))

      })
     .catch(error => {
          console.log(`${Account.errorUser}: ${error.message} at ${dateText}`)
     })
  }
}

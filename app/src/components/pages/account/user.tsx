import * as React from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Markdown from 'react-markdown'

import { ApplicationState, AppDispatch, PayloadProps } from '../../../store/types'
import { UserProps } from '../../../store/account/types'

import { TxHelper } from '../../../components/io/apiTxHelper'
import { Account } from '../../../config/strings'
import { getDictEntries } from '../../../utils/dict'

import { getInfo } from '../../../store/account/user/actions'

interface UserStateProps {
  info: PayloadProps
}

interface UserDispatchProps {
  getInfo: (values: UserProps) => void
}

type Props = UserStateProps & UserDispatchProps

class UserInfo extends React.Component<Props> {

    constructor (props: Props) {
      super(props)
    }

    componentDidMount() {
      const data: UserProps = this.props.info.data as UserProps
      this.props.getInfo(data)
    }

    render() {

        const xs = getDictEntries(this.props.info)

        return (

            <Grid container>
              <Grid item xs={12} sm={3}>
                  &nbsp;
              </Grid>
              <Grid item xs={12} sm={6}>
                <h2>{Account.heading}</h2>
                <Markdown escapeHtml={false} source={xs} />
                <TxHelper/>
              </Grid>
              <Grid item xs={12} sm={3}>
                  &nbsp;
              </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state: ApplicationState): UserStateProps => {
    //console.log(state.orgReader)
    return {
      info: state.user as PayloadProps
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): UserDispatchProps => {
    return {
      getInfo: (values: UserProps) => dispatch(getInfo(values))
    }
}

export const User = connect<UserStateProps, UserDispatchProps, {}, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)

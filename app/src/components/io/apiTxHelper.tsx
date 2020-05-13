import * as React from 'react'
import { connect } from 'react-redux'

import Markdown from 'react-markdown'

import { ApplicationState } from '../../store'
import { ActionProps, AppDispatch } from '../../store/types'
import { TxData } from '../../store/helpers/forms/types'
import { initialise } from '../../store/helpers/forms/actions'

interface TxStateProps {
  info: TxData
}

interface TxDispatchProps {
  initialise: () => void
}

type Props = TxStateProps & TxDispatchProps

class Tx extends React.Component<Props> {

  constructor (props: Props) {
   super(props)
  }

  componentDidMount() {
    this.props.initialise()
  }

  render() {

    const xs =  this.props.info.summary

    return (
      <React.Fragment>
        <hr />
        <Markdown escapeHtml={false} source={xs} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ApplicationState): TxStateProps => {
  return {
    info: state.forms.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): TxDispatchProps => {
  return {
    initialise: () => dispatch(initialise())
  }
}

export const TxHelper = connect<TxStateProps, TxDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(Tx)

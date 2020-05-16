import React from 'react'
import { connect } from 'react-redux'

import { flatten } from 'flat'
import Markdown from 'react-markdown'

import { ApplicationState, ActionProps, AppDispatch, PayloadProps } from '../../store/types'
import { TxData } from '../../store/helpers/forms/types'
import { initialise } from '../../store/helpers/forms/actions'
import { getDictEntries } from '../../utils/dict'

interface TxStateProps {
  info: PayloadProps
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

    let xs = ""
    const data: TxData = this.props.info.data as TxData
    if (data.code != 0) {
        xs = getDictEntries(this.props.info)
    }

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
    info: state.forms as PayloadProps
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

import * as React from 'react'
import { connect } from 'react-redux'

import Markdown from 'react-markdown'

import { ApplicationState } from '../../store'
import { ActionProps, AppDispatch } from '../../store/types'
import { TxData } from '../../store/helpers/forms/types'
import { initialise } from '../../store/helpers/forms/actions'

interface TxStateProps {
  data: TxData
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
    //console.log('transaction: ', this.props.tx)
    if (typeof this.props.data != "undefined" ) {
      const tx = this.props.data
      xs += `${tx.summary}<br /><br />`
          //console.log('transaction: ', this.props.tx)
      Object.entries(tx.info).forEach((entry) => {
        //console.log(entry[0])
        if ( (entry[0] != "data") &&
             (entry[0] != "raw") &&
              (entry[0] != "wait") ) {
          xs += `**${entry[0]}**: ${entry[1]}<br />`
        }
       })
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
  //console.log(state.orgReader)
  return {
    data: state.forms.data as TxData
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

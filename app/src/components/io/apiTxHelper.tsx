import * as React from 'react'
import { connect } from 'react-redux'

import Markdown from 'react-markdown'

import { ApplicationState } from '../../store'
import { ActionProps, AppDispatch } from '../../store/types'
import { TxData } from '../../store/helpers/forms/types'

interface TXProps {
  submittingFunc: Function,
  resettingFunc: Function
  data: TxData
}

type Props = TXProps

class TX extends React.Component<Props> {

  constructor (props: Props) {
   super(props)
  }

  componentDidUpdate(previousProps: Props) {
    if(previousProps.data != this.props.data &&
       typeof this.props.data != 'undefined' ) {
      //console.log('Type check!: ', typeof this.props.tx)
      this.props.submittingFunc(false)
      this.props.resettingFunc()
    }
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

const mapStateToProps = (state: ApplicationState): TXProps => {
  //console.log(state.orgReader)
  return {
    submittingFunc: state.forms.data.submitFunc,
    resettingFunc: state.forms.data.resetFunc,
    data: state.forms.data.data as TxData
  }
}

export const TXHelper = connect<TXProps, {}, {}, ApplicationState>(
  mapStateToProps
)(TX)

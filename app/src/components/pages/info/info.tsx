import * as React from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import Grid from '@material-ui/core/Grid'

import { ApplicationState } from '../../../store/types'

import { InfoProps, InfoTypes } from '../../../store/info/types'

interface StateProps {
  type: InfoTypes
}

type Props = InfoProps & StateProps

const appInfo = (props: Props) => {

    return (

        <Grid container>
            <Grid item xs={12} sm={3}>
                &nbsp;
            </Grid>
            <Grid item xs={12} sm={6}>
                <h2>{props.title}</h2>
                <Markdown escapeHtml={false} source={props.data} />
            </Grid>
            <Grid item xs={12} sm={3}>
                &nbsp;
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state: ApplicationState, ownProps: StateProps): InfoProps => {
  switch (ownProps.type) {
    case InfoTypes.HOME:
      return { title: state.info.data.home.title, data: state.info.data.home.data }
    case InfoTypes.ABOUT:
      return { title: state.info.data.about.title, data: state.info.data.about.data }
    case InfoTypes.HELP:
      return { title: state.info.data.help.title, data: state.info.data.help.data }
    case InfoTypes.FAQ:
      return { title: state.info.data.faq.title, data: state.info.data.faq.data }
    case InfoTypes.DIRECTORY:
      return { title: state.info.data.directory.title, data: state.info.data.directory.data }
    case InfoTypes.BLOG:
      return { title: state.info.data.blog.title, data: state.info.data.blog.data }
    case InfoTypes.CONTACT:
      return { title: state.info.data.contact.title, data: state.info.data.contact.data }
    case InfoTypes.MEMBERS:
      return { title: state.info.data.members.title, data: state.info.data.members.data }
    default:
      return { title: state.info.data.home.title, data: state.info.data.home.data }
  }
}

export const Info = connect<InfoProps, {}, StateProps, ApplicationState>(
  mapStateToProps
)(appInfo)

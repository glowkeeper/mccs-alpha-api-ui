import * as React from 'react'

import Markdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { App as AppMenu } from '../menus'
import { Content } from '../content'
import { App } from '../../config/strings'

import { themeStyles } from '../../styles';

import logo from '../../images/logo.png'

export const Main = () => {

  const classes = themeStyles()

  return (
      <div>
        <Paper className={classes.header} square={true}>
          <Grid container>
            <Grid item xs={12} sm={1}>
                <img className={classes.logo} src={logo}/>
            </Grid>
            <Grid item xs={12} sm={10}>
                &nbsp;
            </Grid>
            <Grid item xs={12} sm={1}>
                <AppMenu />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.content} square={true}>
          <Grid container>
            <Grid item xs={12}>
                <Content />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.footer} square={true}>
          <Grid container>
            <Grid item xs={12}>
              <img className={classes.logo} src={logo}/>
              <br/>
              <Markdown escapeHtml={false} source={App.copyright} />
            </Grid>
            <Grid item xs={2}>
            </Grid>
          </Grid>
        </Paper>
      </div>
  )
}

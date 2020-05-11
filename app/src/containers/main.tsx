import * as React from 'react'

import Markdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { AppMenu } from './menu'
import { Content } from './content'
import { App } from '../utils/strings'

import { themeStyles } from '../styles/theme';

import logo from '../images/logo.png'

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
            <Grid item xs={2}>
                <Markdown escapeHtml={false} source={App.author} />
            </Grid>
            <Grid item xs={8}>
              <h3>{App.title}</h3>
            </Grid>
            <Grid item xs={2}>
              <Markdown escapeHtml={false} source={App.copyright} />
            </Grid>
          </Grid>
        </Paper>
      </div>
  )
}

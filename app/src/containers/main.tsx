import * as React from 'react'

import Markdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { useStyles } from '../styles/theme';

export const Main = () => {

  const classes = useStyles()

  return (
      <div>
        <p>Hellow World</p>
      </div>
  )
}

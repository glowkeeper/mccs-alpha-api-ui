import * as React from 'react'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';

// A theme with custom primary and secondary color.
// It's optional.
let theme = createMuiTheme ({

  spacing: 8,
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
    //htmlFontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\""
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\""
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\""
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\""
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.5em",
      color: "rgba(0, 0, 0, 0.92)"
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.46429em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.4em",
      color: "rgba(0, 0, 0, 0.77)"
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.375em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: "rgba(0, 0, 0, 0.87)"
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '##BBDEFB',
    },
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293'
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f'
    },
    warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00'
    },
    info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2'
    },
    success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c'
    },
  }
})

theme = responsiveFontSizes(theme)
theme.spacing(4)

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(2),
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  header: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #42A5F5 30%, #42A5F5 90%)'
  },
  title: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #42A5F5 30%, #42A5F5 90%)'
  },
  subTitle: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #42A5F5 30%, #42A5F5 90%)'
  },
  content: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  sider: {
    padding: 0,
    margin: theme.spacing(1),
    textAlign: 'left',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  siderMenu: {
    padding: 0,
    margin: 0,
    textAlign: 'left',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  appBar: {
    padding: 0,
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #42A5F5 30%, #42A5F5 90%)'
  },
  caption: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  footer: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #42A5F5 30%, #42A5F5 90%)'
  },
  button: {
    margin: theme.spacing(1),
  },

})

export { theme, useStyles }

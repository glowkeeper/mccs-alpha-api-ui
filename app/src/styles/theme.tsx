import * as React from 'react'

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Form } from 'formik'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

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
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: '#000000'
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: '#000000'
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: '#000000'
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: '#000000'
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.5em",
      color: indigo[900]
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.46429em",
      color: blue[200]
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.4em",
      color: blue[200]
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      lineHeight: "1.375em",
      color: orange[900]
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Helvetica Neue\", \"Arial\", \"sans-serif\", \"Roboto\"",
      color: '#003ea7'
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF"
    },
    primary: blue,
    secondary: indigo,
    error: red,
    warning: orange,
    info: yellow,
    success: green,
  }
})

theme = responsiveFontSizes(theme)
theme.spacing(4)

const themeStyles = makeStyles({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    background: 'linear-gradient(#FFFFFF, #FFFFFF)',
    color: theme.palette.text.primary
  },
  logo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'left',
  },
  header: {
    padding: 0,
    margin: 0,
    textAlign: 'center',
    background: 'linear-gradient(45deg, #003ea7 50%, #003ea7 50%)'
  },
  title: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  subTitle: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  content: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: theme.palette.text.primary,
    background: 'linear-gradient(#FFFFFF, #FFFFFF)'
  },
  caption: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #BBDEFB 30%, #BBDEFB 90%)'
  },
  footer: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background:  'linear-gradient(#003ea7, #003ea7)'
  },
  button: {
    padding: 0,
    margin: 0,
    fontSize: "4rem",
    fontWeight: 400,
    textAlign: 'right',
    color: theme.palette.common.white,
    background:  'linear-gradient(#003ea7, #003ea7)'
  },
  menu: {
    padding: 0,
    margin: 0,
    textAlign: 'left',
    background:  'linear-gradient(#003ea7, #003ea7)'
  }
})

const StyledMenu = withStyles({
  paper: {
    background:  'linear-gradient(#0d47a1, #0d47a1)',
    border: '1px solid #d3d4d5',
  },
})((props: any) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export { theme, themeStyles, StyledMenuItem, StyledMenu }

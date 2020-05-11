import * as React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import DehazeIcon from '@material-ui/icons/Dehaze'
import HomeIcon from '@material-ui/icons/Home'
import SendIcon from '@material-ui/icons/Send'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'

import { themeStyles, menuStyles } from '../styles/theme';

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

const StyledMenu = (props: any) => {

  return (

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
  )
}

export const AppMenu = () => {

  const themeClasses = themeStyles()
  const menuClasses = menuStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
      <div>

          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <DehazeIcon/>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

            <Link to={PathConfig.home}>
              <MenuItem className={menuClasses.root}>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={Paths.home} />
              </MenuItem>
            </Link>

            <Link to={PathConfig.about}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.help}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <HelpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.faq}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.faq} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.directory}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.directory} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.blog}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.blog} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.contact}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </MenuItem>
            </Link>

            <Link to={PathConfig.members}>
                <MenuItem className={menuClasses.root}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.members} />
                </MenuItem>
            </Link>
        </StyledMenu>
    </div>
  )
}

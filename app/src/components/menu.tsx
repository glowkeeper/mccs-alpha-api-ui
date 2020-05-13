import * as React from 'react'
import { NavLink } from 'react-router-dom'

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
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory'
import BookIcon from '@material-ui/icons/Book'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Fade from '@material-ui/core/Fade';

import { themeStyles, StyledMenu, StyledMenuItem } from '../styles/theme';

import { Paths } from '../config/strings'
import { Paths as PathConfig } from '../config/paths'

export const AppMenu = () => {

  const themeClasses = themeStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     <div>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DehazeIcon className={themeClasses.button}/>
        </Button>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <NavLink
                to={PathConfig.home}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
              <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={Paths.home} />
              </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.about}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InfoIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.help}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <HelpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.faq}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <QuestionAnswerIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.faq} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.directory}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <StoreMallDirectoryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.directory} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.members}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.members} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.blog}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <BookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.blog} />
                </StyledMenuItem>
            </NavLink>

            <NavLink
                to={PathConfig.contact}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContactMailIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </StyledMenuItem>
            </NavLink>

        </StyledMenu>
    </div>
  )
}

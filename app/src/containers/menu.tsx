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
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory'
import BookIcon from '@material-ui/icons/Book'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Fade from '@material-ui/core/Fade';

import { themeStyles, StyledMenu, StyledMenuItem } from '../styles/theme';

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

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

  // StyledMenuItem, StyledMenu
  return (
     <div>
        <Button
          className={themeClasses.button}
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <DehazeIcon fontSize='large'/>
        </Button>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <Link to={PathConfig.home}>
              <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={Paths.home} />
              </StyledMenuItem>
            </Link>

            <Link to={PathConfig.about}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InfoIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.help}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <HelpIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.faq}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <QuestionAnswerIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.faq} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.directory}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <StoreMallDirectoryIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.directory} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.blog}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <BookIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.blog} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.contact}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContactMailIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </StyledMenuItem>
            </Link>

            <Link to={PathConfig.members}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={Paths.members} />
                </StyledMenuItem>
            </Link>
        </StyledMenu>
    </div>
  )
}

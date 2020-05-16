import React from 'react'
import { NavLink } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuOutlined from '@ant-design/icons/lib/icons/MenuOutlined'
//import DehazeIcon from '@material-ui/icons/Dehaze'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory'
import BookIcon from '@material-ui/icons/Book'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Fade from '@material-ui/core/Fade';

import { themeStyles, AppMenu, AppMenuItem } from '../../styles';

import { Paths, Local } from '../../config'

const URLLink = ({ url, children }: any) => (
  <NavLink
    to={url = `${url}`}
    activeStyle={{
        fontWeight: "bold"
    }}
  >
    {children}
  </NavLink>
)

export const App = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const themeClasses = themeStyles()
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
          <MenuOutlined className={themeClasses.button}/>
        </Button>
        <AppMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <URLLink url={Local.home}>
              <AppMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={Paths.home} />
              </AppMenuItem>
            </URLLink>

            <URLLink url={Local.about}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.help}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.faq}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <QuestionAnswerIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.faq} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.directory}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <StoreMallDirectoryIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.directory} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.members}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.members} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.blog}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <BookIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.blog} />
                </AppMenuItem>
            </URLLink>

            <URLLink url={Local.contact}>
                <AppMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContactMailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </AppMenuItem>
            </URLLink>
        </AppMenu>
    </div>
  )
}

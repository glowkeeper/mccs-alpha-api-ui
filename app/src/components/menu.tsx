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

import { themeStyles, StyledMenu, StyledMenuItem } from '../styles/theme';

import { Paths } from '../config/strings'
import { Paths as PathConfig } from '../config/paths'

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
          <MenuOutlined className={themeClasses.button}/>
        </Button>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <URLLink url={PathConfig.home}>
              <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={Paths.home} />
              </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.about}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.about} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.help}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.help} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.faq}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <QuestionAnswerIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.faq} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.directory}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <StoreMallDirectoryIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.directory} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.members}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.members} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.blog}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <BookIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.blog} />
                </StyledMenuItem>
            </URLLink>

            <URLLink url={PathConfig.contact}>
                <StyledMenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ContactMailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={Paths.contact} />
                </StyledMenuItem>
            </URLLink>

        </StyledMenu>
    </div>
  )
}

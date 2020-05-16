import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Info } from './pages/info/info'
import { InfoTypes } from '../store/info/types'

import { Paths, Local } from '../config'
import { Signup, User } from '../containers/pages/account'

import logo from '../images/logo.png'

export const Content = () => {

    return (

      <Switch>
        <Route name={Paths.home} exact path={Local.home} render={() => <Info type={InfoTypes.HOME}/>} />
        <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />
        <Route name={Paths.help} path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.faq} path={Local.faq} render={() => <Info type={InfoTypes.FAQ}/>} />
        <Route name={Paths.directory} path={Local.directory} render={() => <Info type={InfoTypes.DIRECTORY}/>} />
        <Route name={Paths.blog} path={Local.blog} render={() => <Info type={InfoTypes.BLOG}/>} />
        <Route name={Paths.contact} path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />

        <Route
          name={Paths.signup}
          path={Local.signup}
          render={() => <Signup />}
        />

        <Route
          name={Paths.user}
          path={Local.user}
          render={() => <User/>}
        />

      </Switch>
    )
}

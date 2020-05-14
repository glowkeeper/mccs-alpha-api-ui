import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Info } from './pages/info/info'
import { InfoTypes } from '../store/info/types'

import { Paths } from '../config/strings'
import { Paths as PathConfig } from '../config/paths'

import logo from '../images/logo.png'

import { Signup } from '../containers/pages/account/signup'
import { User } from '../containers/pages/account/user'

class Content extends React.Component {

  render() {

    return (

      <Switch>
        <Route name={Paths.home} exact path={PathConfig.home} render={() => <Info type={InfoTypes.HOME}/>} />
        <Route name={Paths.about} exact path={PathConfig.about} render={() => <Info type={InfoTypes.ABOUT}/>} />
        <Route name={Paths.help} path={PathConfig.help} render={() => <Info type={InfoTypes.HELP}/>} />
        <Route name={Paths.faq} path={PathConfig.faq} render={() => <Info type={InfoTypes.FAQ}/>} />
        <Route name={Paths.directory} path={PathConfig.directory} render={() => <Info type={InfoTypes.DIRECTORY}/>} />
        <Route name={Paths.blog} path={PathConfig.blog} render={() => <Info type={InfoTypes.BLOG}/>} />
        <Route name={Paths.contact} path={PathConfig.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />

        <Route
          name={Paths.signup}
          path={PathConfig.signup}
          render={() => <Signup/>}
        />

        <Route
          name={Paths.user}
          path={PathConfig.user}
          render={() => <User/>}
        />

      </Switch>
    )
  }
}

export { Content }

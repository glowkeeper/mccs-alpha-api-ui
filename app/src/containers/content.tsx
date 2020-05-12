import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Info } from './pages/info/info'
import { InfoTypes } from '../store/info/types'

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

import logo from '../images/logo.png'

import { Signup } from './pages/account/signup'

class Content extends React.Component {

  render() {

    return (

      <Switch>
        <Route name={Paths.home} exact path={PathConfig.home} render={() => <Info type={InfoTypes.HOME} />} />
        <Route name={Paths.about} exact path={PathConfig.about} render={() => <Info type={InfoTypes.ABOUT} />} />
        <Route name={Paths.help} path={PathConfig.help} render={() => <Info type={InfoTypes.HELP} />} />
        <Route name={Paths.faq} path={PathConfig.faq} render={() => <Info type={InfoTypes.FAQ} />} />
        <Route name={Paths.directory} path={PathConfig.directory} render={() => <Info type={InfoTypes.DIRECTORY} />} />
        <Route name={Paths.blog} path={PathConfig.blog} render={() => <Info type={InfoTypes.BLOG} />} />
        <Route name={Paths.contact} path={PathConfig.contact} render={() => <Info type={InfoTypes.CONTACT} />} />

        <Route
          name={Paths.signup}
          path={PathConfig.signup}
          render={() => <Signup />}
        />

      </Switch>
    )
  }
}

export { Content }

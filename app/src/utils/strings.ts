import { Paths as configPaths } from './config'

class App {

  static readonly title='MCCS'
  static readonly tagline='MCCS'
  static readonly copyright='MCCS © 2020'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'
}

class Home {

  static heading = 'Home'

  static info = `blah`
}

class About {

  static heading = 'About MCCS'

  static info = `**MCCS UI** version 0.0.1.<br /><br />Created by _${App.author}_`

}

class Overview {

  static heading = 'Overview of MCCS'

  static info = 'blah'
}

class Help {

  static heading = 'MCCS Help'

  static info = `blah`
}

export { App,
         Paths,
         Home,
         About,
         Overview,
         Help
       }

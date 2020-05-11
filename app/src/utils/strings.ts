import { Paths as configPaths } from './config'

class App {

  static readonly title='Open Credit Network'
  static readonly tagline='MCCS'
  static readonly copyright='MCCS © 2020'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly about = 'About'
  static readonly help = 'How it Works'
  static readonly faq = 'FAQ'
  static readonly directory = 'Directory'
  static readonly blog = 'Blog'
  static readonly contact = 'Contact'
  static readonly members = 'Member Area'
}

class Home {

  static heading = 'Home'

  static info = `blah`
}

class About {

  static heading = 'About MCCS'

  static info = `**MCCS UI** version 0.0.1.<br /><br />Created by _${App.author}_`

}

class Help {

  static heading = 'MCCS Help'

  static info = `blah`
}

class Faq {

  static heading = 'MCCS Help'

  static info = `blah`
}

class Directory {

  static heading = 'MCCS Help'

  static info = `blah`
}

class Blog {

  static heading = 'MCCS Help'

  static info = `blah`
}

class Contact {

  static heading = 'MCCS Help'

  static info = `blah`
}

class Members {

  static heading = 'MCCS Help'

  static info = `blah`
}

export { App,
         Paths,
         Home,
         About,
         Help,
         Faq,
         Directory,
         Blog,
         Contact,
         Members
       }

import { Paths as configPaths } from './config'

class App {

  static readonly title='Open Credit Network'
  static readonly tagline='MCCS'
  static readonly copyright='© Copyright 2020 Open Credit Network'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly about = 'About'
  static readonly help = 'How it Works'
  static readonly faq = 'FAQ'
  static readonly directory = 'Directory'
  static readonly members = 'Members Area'
  static readonly blog = 'Blog'
  static readonly contact = 'Contact'

  static readonly signup = 'signup'
}

class Home {

  static heading = 'Home'

  static info = `Every new website should start with \"Hello World!\"`
}

class About {

  static heading = 'About MCCS'

  static info = `**MCCS UI** version 0.0.1.<br /><br />Created by _${App.author}_`

}

class Help {

  static heading = 'MCCS Help'

  static info = `I need some too`
}

class Faq {

  static heading = 'FAQ'

  static info = `Coming soon`
}

class Directory {

  static heading = 'MCCS Directory'

  static info = `Coming soon`
}

class Blog {

  static heading = 'Blog'

  static info = `Some really interesting content will appear here soon`
}

class Contact {

  static heading = 'Contact'

  static info = `a dot person at ocn dot com`
}

class Members {

  static heading = 'Login'

  static info = `Login form appearing here next`
}

class Account {

  static readonly heading = "Account"

  static readonly signupHeading = 'Sign Up'
  static readonly signupSuccess = 'Signup Successfull'
  static readonly signupFail = 'Signup Failed'

  static readonly ErrorPassTooShort = "Password is too short - should be a minimum of 8 char\'s"
  static readonly ErrorPassNotMatch = "Passwords do not match"
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
         Members,
         Account
       }

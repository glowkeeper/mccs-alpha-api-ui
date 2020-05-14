import { Paths as configPaths } from './paths'

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
  static readonly user = 'user'
}

class GeneralError {

    static readonly errorRequired = "Required"
}

class Home {

  static readonly heading = 'Home'

  static readonly info = `Every new website should start with \"Hello World!\"`
}

class About {

  static readonly heading = 'About MCCS'

  static readonly info = `**MCCS UI** version 0.0.1.<br /><br />Created by _${App.author}_`

}

class Help {

  static readonly heading = 'MCCS Help'

  static readonly info = `I need some too`
}

class Faq {

  static readonly heading = 'FAQ'

  static readonly info = `Coming soon`
}

class Directory {

  static readonly heading = 'MCCS Directory'

  static readonly info = `Coming soon`
}

class Blog {

  static readonly heading = 'Blog'

  static readonly info = `Some really interesting content will appear here soon`
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = `a dot person at ocn dot com`
}

class Members {

  static readonly heading = 'Login'

  static readonly info = `Login form appearing here next`
}

class Account {

  static readonly heading = "Account"

  static readonly signupHeading = 'Sign Up'
  static readonly email ='Email'
  static readonly password ='Password'
  static readonly repeatPassword = 'Reconfirm Password'
  static readonly signupButton = 'Create'

  static readonly successSignup = 'Signup Successful'
  static readonly successUser = 'User Successful'

  static readonly errorUser = 'Couldn\'t get user details'
  static readonly errorSignup = 'Signup Failed'
  static readonly errorEmailValid = "Please enter a valid email (e.g. name@address.com)"
  static readonly errorPassTooShort = "Please enter a password that contains at least 8 characters"
  static readonly errorPassNotMatch = "Please ensure your passwords match"
}

export { App,
         Paths,
         GeneralError,
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

class Paths {

  static readonly home = '/'
  static readonly about = '/about'
  static readonly help = '/help'
  static readonly faq = '/faq'
  static readonly directory = '/directory'
  static readonly members = '/signup'
  static readonly blog = '/blog'
  static readonly contact = '/contact'

  static readonly signup = '/signup'
  static readonly user = '/user'
}

class Remote {

    static readonly secure = 'https://'
    static readonly insecure = 'http://'

    static readonly server = 'mccs-alpha-api.ic3.dev/api/v1'
    static readonly port = '80'
    static readonly home = '/'
    static readonly signup = '/signup'
    static readonly user = '/user'
}

export { Paths, Remote }

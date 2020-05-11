import { PayloadProps } from '../types'

export const enum InfoTypes {
  HOME = "home",
  ABOUT = "about",
  HELP = "help",
  FAQ = "faq",
  DIRECTORY = "directory",
  BLOG = "blog",
  CONTACT = "contact",
  MEMBERS = "members"
}

export interface InfoProps {
  title: string
  data: string
}

export interface InfoData {
  home: InfoProps
  about: InfoProps
  help: InfoProps
  faq: InfoProps
  directory: InfoProps
  blog: InfoProps
  contact: InfoProps
  members: InfoProps
}

export interface InfoPageProps extends PayloadProps {
  data: InfoData
}

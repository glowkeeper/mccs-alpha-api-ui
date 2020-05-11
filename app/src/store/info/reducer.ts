import { Reducer } from 'redux'
import { InfoPageProps } from './types'
import { About, Help, Home, Faq, Directory, Blog, Contact, Members } from '../../utils/strings'

const initialState: InfoPageProps = {
  data: {
      home: {
        title: Home.heading,
        data: Home.info
      },
    about: {
      title: About.heading,
      data: About.info
    },
    help: {
      title: Help.heading,
      data: Help.info
    },
    faq: {
      title: Faq.heading,
      data: Faq.info
    },
    directory: {
      title: Directory.heading,
      data: Directory.info
    },
    blog: {
      title: Blog.heading,
      data: Blog.info
    },
    contact: {
      title: Contact.heading,
      data: Contact.info
    },
    members: {
      title: Members.heading,
      data: Members.info
    }
  }
}

export const reducer: Reducer<InfoPageProps> = (state = initialState): InfoPageProps => {
  return state
}

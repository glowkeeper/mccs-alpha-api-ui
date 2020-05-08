import * as React from 'react'
import { render } from "react-dom"
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { history } from './app/utils/history'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import { theme } from './app/styles/theme'

import { setBlockchain } from './app/components/blockchain/blockchain'

import { Main } from './app/containers/main'
import { configureStore } from './app/store'

const initialState = (window as any).initialReduxState
const store = configureStore(initialState)
setBlockchain({store: store})

const App = () => (
    <Provider store={store}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router history={history}>
            <Main />
          </Router>
        </ThemeProvider>
      </React.Fragment>
    </Provider>
);

render(<App />, document.querySelector("#root"))

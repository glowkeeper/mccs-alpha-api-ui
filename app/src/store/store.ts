//import { Action } from 'redux'
import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
//import thunkMiddleware, { ThunkAction } from 'redux-thunk'
//import ReduxThunk, { ThunkAction } from 'redux-thunk'
import ReduxThunk from 'redux-thunk'

import { ActionProps } from './types'
import { FormProps } from './helpers/forms/types'
import { InfoPageProps } from './info/types'

import { reducer as formReducer } from './helpers/forms/reducer'
import { reducer as infoReducer } from './info/reducer'

export interface ApplicationState {
  info: InfoPageProps
  forms: FormProps
}

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  info: infoReducer,
  forms: formReducer
})

export function configureStore(
  initialState: ApplicationState
): Store<ApplicationState, ActionProps> {

  // create the redux-saga middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}

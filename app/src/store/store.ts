//import { Action } from 'redux'
import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
//import thunkMiddleware, { ThunkAction } from 'redux-thunk'
//import ReduxThunk, { ThunkAction } from 'redux-thunk'
import ReduxThunk from 'redux-thunk'

import { ApplicationState, ActionProps } from './types'

import { reducer as formReducer } from './helpers/forms/reducer'
import { reducer as infoReducer } from './info/reducer'
import { reducer as userReducer } from './account/reducer'

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  info: infoReducer,
  forms: formReducer,
  user: userReducer
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

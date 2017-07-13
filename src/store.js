import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducer from "./reducers"

export const history = createHistory()

const router = routerMiddleware(history)
export function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk, logger(), router)
  );
}
import { applyMiddleware, createStore, compose } from "redux"
import createHistory from 'history/createBrowserHistory'
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import { routerMiddleware } from 'react-router-redux'
import { createSagaMiddleware } from 'redux-saga'

import rootSaga from './sagas'
import reducer from "./reducers"

const sagaMiddleware = createSagaMiddleware()

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const router = routerMiddleware(history)
export function configureStore() {
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger(), router, sagaMiddleware))
  );
}

sagaMiddleware.run(rootSaga)
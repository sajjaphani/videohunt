import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk, logger())
  );
}
import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootSaga from './sagas'
import createRootReducer from "./reducers"

const sagaMiddleware = createSagaMiddleware()

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const router = routerMiddleware(history)

const resetEnhancer = rootReducer => (state, action) => {
    if (action.type !== 'APP__RESET__STATE') {
        return rootReducer(state, action);
    }

    const newState = rootReducer(undefined, {});
    newState.router = state.router;
    return newState;
};

const store = createStore(resetEnhancer(createRootReducer(history)), composeEnhancers(applyMiddleware(thunk, logger(), router, sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export { store, history }
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import jwt from 'jsonwebtoken'

import AppContainer from './containers/App'
import { store } from './store';
import setAuthToken from './utils/setAuthToken'
import {loginSuccess} from './containers/App/actions'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const user = jwt.decode(localStorage.jwtToken)
  store.dispatch(loginSuccess(user))
}

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  ,
  document.getElementById('app')
);
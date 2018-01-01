import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken'

import Root from './components/Root'
import { store } from './store';
import { setAuthToken } from './utils/Headers'
import { loginSuccess } from './containers/App/actions'
import { getSerializedToken } from './utils/localStorage'

initAuthToken();

ReactDOM.render(
  <Root store={store}/>
  ,
  document.getElementById('app')
);

function initAuthToken() {
  const jwtToken = getSerializedToken();
  if (jwtToken) {
    setAuthToken(jwtToken)
    const user = jwt.decode(jwtToken)
    store.dispatch(loginSuccess(user))
  }
}
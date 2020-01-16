import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import jwt from 'jsonwebtoken'

import App from './containers/App'
import { store } from './store';
import setAuthToken from './utils/setAuthToken'
import registerServiceWorker from './registerServiceWorker';
import { loginSuccess } from './containers/App/actions'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const user = jwt.decode(localStorage.jwtToken)
  store.dispatch(loginSuccess(user))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
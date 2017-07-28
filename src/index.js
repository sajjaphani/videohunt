import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppContainer from './containers/App'
import { store } from './store';
import setAuthToken from './utils/setAuthToken'

setAuthToken(localStorage.getItem('jwtToken'))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  ,
  document.getElementById('app')
);
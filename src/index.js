import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('app')
);
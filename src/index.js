import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App'
import { Provider } from 'react-redux'
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  ,
  document.getElementById('app')
);
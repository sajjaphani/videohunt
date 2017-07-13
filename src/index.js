import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { history, configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('app')
);
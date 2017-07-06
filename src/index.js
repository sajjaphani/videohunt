import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './routes/layout'

import { loadVideos } from './actions/videoActions';

import configureStore from './store';
const store = configureStore();

store.dispatch(loadVideos());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
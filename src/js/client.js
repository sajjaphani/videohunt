import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

import { loadVideos } from './actions/videoActions';

import configureStore from './store';
const store = configureStore();

store.dispatch(loadVideos());

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
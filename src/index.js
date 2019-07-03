import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

import { createStore } from 'redux';
import rootReducer from './store/modules';

import { Provider } from 'react-redux';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

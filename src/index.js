import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';

import { createStore } from 'redux';
import rootReducer from './store/modules';

import { Provider } from 'react-redux';

// **** 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

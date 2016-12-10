import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import configureStore from './stores';
import reducers from './reducers';

import { createStore } from 'redux';
import App from './containers/App';

// const store = configureStore();

// const store = createStore(reducers, {c: 3},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);

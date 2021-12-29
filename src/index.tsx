import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Route from './Route';

import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
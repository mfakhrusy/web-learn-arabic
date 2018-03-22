import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
// import configureStore from './store/configureStore';

require('./styles/main.scss');

// const store = configureStore();

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

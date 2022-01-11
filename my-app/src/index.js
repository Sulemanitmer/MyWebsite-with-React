import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import store from './store';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import Fluid from './components/fluid.jsx';
import './assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Fluid />, root);
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

ReactDOM.render(
    <App appState={store}/>,
  document.getElementById('root')
);


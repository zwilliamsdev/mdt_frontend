import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
// Bootstrap CSS
require('bootstrap/dist/css/bootstrap.min.css');
require('jquery/dist/jquery');
require('popper.js/dist/popper');
require('bootstrap/dist/js/bootstrap');
require('font-awesome/css/font-awesome.css');
require('./darkly.min.css');
// End Bootsrap CSS
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

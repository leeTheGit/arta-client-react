import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.defaults.baseURL = 'http://arta-api.io';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
    config['withCredentials'] =true;
    config['auth'] = {
        username: 'bugs',
        password: 'artadb'
    };
    console.log(config);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const json = require('./resume.json'); // load resume file

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);

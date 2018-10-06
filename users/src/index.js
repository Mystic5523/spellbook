// import overall css file needs to be added. 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; /* its the reactStrap - riddin dirtyyy - */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

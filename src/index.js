import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css';
import './static/css/common.css';
import './static/font/iconfont.css';
import { Provider } from 'react-redux'
import {store} from './store/index';



import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

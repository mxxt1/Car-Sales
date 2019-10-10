import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from './reducers'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const middleware=[thunk];

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    
    );



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

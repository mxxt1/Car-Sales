import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools, compose} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from './reducers'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
    
    );



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

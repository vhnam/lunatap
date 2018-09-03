import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import { fetchAllPosts } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(fetchAllPosts())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'))

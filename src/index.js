import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

function productsReducer(state = [], action) {
    return state
};

function usersReducer(state = '', action) {
    return state
};

const allReducers = combineReducers({
    products: productsReducer,
    users: usersReducer
});

const store = createStore(allReducers);
console.log('store is: ', store);
console.log('state is: ', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

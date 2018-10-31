import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
const store = createStore(reducer);

function reducer(state, action) {
    if (action.type === 'updateState') {
        return action.payload.update
    }

    return 'state'
};

console.log('store is: ', store);
console.log('state is: ', store.getState());

const action = {
    type: 'updateState',
    payload: {
        update: 'next state'
    }
}

store.dispatch(action)

console.log("after dispatched, the state is: ", store.getState())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

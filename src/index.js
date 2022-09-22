import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// PIZZA REDUCER
const pizzas = (state = [], action) => {
    if (action.type === 'GET_PIZZAS') {
        return action.payload;
    }
    return state;
}

const cart = (state = [], action) => {
    // dealing with number and id's of pizzas
    // action type to add 
    // action type to remove
    return state;
}

// ORDER DETAILS
const orderDetails = (state = [], action) => {
    // action type to add customer info
    console.log('Customer Info:', action.payload);
    if(action.type === 'ADD_CLIENT_INFO') {
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzas,
        cart,
        orderDetails
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));

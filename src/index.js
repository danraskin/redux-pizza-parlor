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
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    if (action.type === 'REMOVE_FROM_CART') {
        console.log('item to remove is:', action.payload);
        let removeID = action.payload;
        console.log('AP is:', action.payload);
        // FIND IN ARRAY: state @ i .id? 
        console.log('State is:', state);
        let results = state.filter(pizza => (pizza.id === Number(removeID)));
        console.log('Filter Results:', results);
        let index = state.indexOf(results[0]);
        if (index > -1) {
            results.splice(index, 1);
        } return results;

    }
    if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}

// ORDER DETAILS
const orderDetails = (state = [], action) => {
    // action type to add customer info
    console.log('Customer Info:', action.payload);
    if (action.type === 'ADD_CLIENT_INFO') {
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_ORDER') {
        return [];
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

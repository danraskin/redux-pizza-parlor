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

// CART REDUCER
const cart = (state = [], action) => {
    // dealing with number and id's of pizzas
    // action type to add 
    // action type to remove
    if (action.type === 'ADD_TO_CART') {
        return [...state, action.payload];
    }
    // if (action.type === 'REMOVE_FROM_CART') {
    //     let beforeSlice = state.slice(0, action.index);
    //     let afterSlice = state.slice(action.index + 1);

    //     return beforeSlice.concat(afterSlice);
    // }
    return state;
}

// ORDER DETAILS
const orderDetails = (state = [], action) => {
    // action type to add customer info


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

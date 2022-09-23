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
        let newState = state.filter(pizza=> (pizza.id !== action.payload));
        return newState;

    }
    if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}


 // sets index of the artist to delete


// ORDER DETAILS
const orderDetails = (state = [], action) => {
    if (action.type === 'ADD_CLIENT_INFO') {
        const customerInfo = action.payload;
        return [ customerInfo ];
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

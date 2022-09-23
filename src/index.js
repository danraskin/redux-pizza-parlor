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
        let newState = state.filter(pizza => (pizza.id !== action.payload));
        return newState;

    }
    if (action.type === 'CLEAR_CART') {
        return [];
    }
    return state;
}


// sets index of the artist to delete


// ORDER DETAILS
const orderDetails = (state = {}, action) => {
    // action type to add customer info
    console.log('Customer Info:', action.payload);
    if (action.type === 'CREATE_ORDER') { //need to *initialize* an order object.
        console.log(action.payload);
        const total = action.payload;
        return { ...state, total };
    }
    // action.payload is local state TOTAL from MENU; 
    // takes info in CART and 
    if (action.type === 'ADD_CLIENT_INFO') {
        const customerInfo = action.payload;
        return { ...state, customerInfo }
    }

    if (action.type === 'CLEAR_ORDER') {
        return [];
    }
    return state;
}

// ORDERS FOR ADMIN

const adminOrders = (state = [], action) => {
    console.log('Admin Info:', action.payload);
    if (action.type === 'GET_ADMIN_ORDERS') {
        return [...state]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzas,
        cart,
        orderDetails,
        adminOrders,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));

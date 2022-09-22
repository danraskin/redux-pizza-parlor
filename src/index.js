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
        console.log(action.payload);
        console.log(state);
        let a = state.slice(0, action.payload);
        let b = state.slice(action.payload + 1);
        return a.concat(b);
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
    //action.type === 'CREATE_ORDER'
    // action.payload is local state TOTAL from MENU; 
    // takes info in CART and 
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

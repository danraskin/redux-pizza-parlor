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


    return [
        {
            name: 'pizza1',
            price: 15.99
        },
        {
            name: 'pizza2',
            price: 16.99
        }]

    


    // if (action.type === 'ADD_TO_CART') {
    //     return [...state, action.payload];
    // }
    // if (action.type === 'REMOVE_FROM_CART') {
    //     let beforeSlice = state.slice(0, action.index);
    //     let afterSlice = state.slice(action.index + 1);

    //     return beforeSlice.concat(afterSlice);
    // }
    // return state;
}

// ORDER DETAILS
const orderDetails = (state = [], action) => {
    // action type to add customer info

    return {
        customer_name: "Donatello",
        street_address: "20 W 34th St",
        city: "New York",
        zip: "10001",
        total: "27.98",
        type: "Pickup",
        pizzas: [{
          id: "1",
          quantity: "1"
        },{
          id: "2",
          quantity: "1"
        }]
      };
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// PIZZA REDUCER
const cart = (state = [], action) => {
    // dealing with number and id's of pizzas
    // action type to add 
    // action type to remove


    return state;
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

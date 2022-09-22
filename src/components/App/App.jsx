import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Header from '../Header/Header';
// import Checkout from '../Checkout/Checkout';
// import Menu from '../Menu/Menu';
import OrderForm from '../OrderForm/OrderForm';
// import PizzaItem from '../PizzaItem/PizzaItem';



function App() {

  // GET PIZZAS via AXIOS


  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          // Menu and Pizza Items
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
        </Route>
        <Route exact path="/order">
          <OrderForm />
        </Route>
        <Route exact path="/checkout">
          // checkout componenets
        </Route>
        <Route exact path="/admin">
          // admin page components
        </Route>


      </Router>

    </div>
  );
}

export default App;

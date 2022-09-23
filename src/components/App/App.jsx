import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// COMPONENT IMPORTS
import Header from '../Header/Header';
import Checkout from '../Checkout/Checkout';
import Menu from '../Menu/Menu';
import OrderForm from '../OrderForm/OrderForm';
import Admin from '../Admin/Admin';




function App() {
  const dispatch = useDispatch();
  //PAGE LOAD
  useEffect(() => {
    fetchMenu();
  }, []);
  // GET PIZZAS via AXIOS
  const fetchMenu = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then(response => {
        console.log(response);
        const action = {
          type: 'GET_PIZZAS',
          payload: response.data
        }
        dispatch(action);
      })
  }

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/order">
          <OrderForm />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>

    </div>
  );
}

export default App;

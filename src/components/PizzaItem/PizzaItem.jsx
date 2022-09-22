import React from 'react'
import './PizzaItem.css';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';


function PizzaItem({ pizza }) {
    let [cartStatus, setCartStatus] = useState(true);

    const dispatch = useDispatch();


    const removeFromCart = () => {
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: pizza.id,
        }
        console.log(pizza)
        dispatch(action);
        setCartStatus(true);

    }

    const addToCart = () => {
        const action = {
            type: 'ADD_TO_CART',
            payload: { pizza },
        }
        console.log(pizza)
        dispatch(action);
        setCartStatus(false);
    }

    return (
        <div className="pizzaitem">
            <img src={pizza.image_path} className="pizzaPhoto" />
            <section className="pizzadetails">
                {pizza.name}
                {pizza.price}
                <div>
                    {cartStatus ?
                        <button onClick={addToCart}>Add to Order</button>
                        :
                        <button onClick={removeFromCart}>Remove</button>
                    }
                </div>
            </section>
        </div>

    )
};

export default PizzaItem;
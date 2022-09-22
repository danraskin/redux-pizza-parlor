import React from 'react'
import './PizzaItem.css';
import { useDispatch } from 'react-redux'

function PizzaItem({ pizza }) {
    const dispatch = useDispatch();
    const action = {
        type: 'ADD_TO_CART',
        payload: { pizza },
    }

    const addToCart = () => {
        console.log(pizza)
        dispatch(action);
    }

    return (
        <div className="pizzaitem">
            <section>
                <img src={pizza.image_path} className="pizzaPhoto" />
            </section>
            <section className="pizzadetails">
                {pizza.name}
                {pizza.price}
                <button onClick={addToCart}>Add to Order</button>
            </section>
        </div>

    )
};

export default PizzaItem;
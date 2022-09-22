import { useDispatch, useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './Menu.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Menu() {
    const dispatch = useDispatch();
    const menu = useSelector(store => store.pizzas);

    const orderDetails = useSelector(store=> store.orderDetails);

    const [ totalCost, setTotalCost ] = useState(0);

    const accrueTotal = (price) => {
        setTotalCost(Number(totalCost) + Number(price));
    }
    const reduceTotal = (price) => {
        setTotalCost(Number(totalCost) - Number(price));
    }

    const handleClick = () => {
        const action = { type: 'CREATE_ORDER', payload: totalCost };
        dispatch(action);
        console.log(orderDetails);
    }

    return (
        <div>
            <div >
                {menu.map((pizza, i) => {
                    return <PizzaItem key={i} pizza={pizza} reduceTotal={reduceTotal} accrueTotal={accrueTotal} className="pizzaitem" />
                })}
            </div>
            <button onClick={handleClick}>CONTINUE
                {/* <Link to="/order">
                    Continue to Order
                </Link> */}
            </button>
        </div>
    )
};

export default Menu;
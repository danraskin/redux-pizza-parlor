import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './Menu.css'
import { Link } from 'react-router-dom';



function Menu() {
    const menu = useSelector(store => store.pizzas);
    return (
        <div>
            <div >
                {menu.map((pizza, i) => {
                    return <PizzaItem key={i} pizza={pizza} className="pizzaitem" />
                })}
            </div>
            <button>
                <Link to="/order">
                    Continue to Order
                </Link>
            </button>
        </div>
    )
};

export default Menu;
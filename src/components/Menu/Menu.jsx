import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import '../PizzaItem/PizzaItem.css'


function Menu() {
    const menu = useSelector(store => store.pizzas);
    return (
        <div>
            <div>
                {menu.map((pizza, i) => {
                    return <PizzaItem key={i} pizza={pizza} />
                })}
            </div>
        </div>
    )
};

export default Menu;
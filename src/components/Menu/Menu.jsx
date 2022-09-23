import { useDispatch, useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './Menu.css'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';

function Menu() {
    const dispatch = useDispatch();
    const menu = useSelector(store => store.pizzas);

    const accrueTotal = (price) => {
        console.log(price);
        const action = {type: 'ACCRUE_TOTAL', payload: price}
        dispatch(action);
    }
    const reduceTotal = (price) => {
            const action = {type: 'REDUCE_TOTAL', payload: price}
            dispatch(action);
    }
    return (
        <section>
            <Grid container spacing={4} sx={{ mx: "auto" }}>
                {menu.map((pizza, i) => {
                    return (
                        <Grid item key={i} xs={12} md={7} lg={4}>
                            <PizzaItem
                                key={i}
                                pizza={pizza}
                                reduceTotal={reduceTotal}
                                accrueTotal={accrueTotal}
                                className="pizzaitem" />
                        </Grid>
                    )
                })}
            </Grid>
            <div >

            </div>
            <Button variant='contained'>
                <Link to="/order">
                    Continue to Order
                </Link>
            </Button>
        </section>
    )
};

export default Menu;
import { useDispatch, useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './Menu.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';



function Menu( {totalCost, accrueTotal, reduceTotal}) {
    const dispatch = useDispatch();
    const menu = useSelector(store => store.pizzas);

    const orderDetails = useSelector(store=> store.orderDetails);

    //  MOVING BELOW UP TO APP - Need to pass back totalCost, accrueTotal and reduceTotal
    // const [ totalCost, setTotalCost ] = useState(0);

    // const accrueTotal = (price) => {
    //     setTotalCost(Number(totalCost) + Number(price));
    // }
    // const reduceTotal = (price) => {
    //     setTotalCost(Number(totalCost) - Number(price));
    // }

    const handleClick = () => {
        const action = { type: 'CREATE_ORDER', payload: totalCost };
        dispatch(action);
        console.log(orderDetails);
    }

    return (
        <section>
            <Grid container spacing={4} sx={{ mx: "auto" }}>
                {menu.map((pizza, i) => {
                    return (
                        <Grid item key={i} xs={12} md={7} lg={4}>
                            <PizzaItem key={i} pizza={pizza} accrueTotal={accrueTotal} reduceTotal={reduceTotal} className="pizzaitem" />
                        </Grid>
                    )
                })}
            </Grid>
            <div >

            </div>
            <Button onClick={handleClick} variant='contained'>
                <Link to="/order">
                    Continue to Order
                </Link>
            </Button>
        </section>
    )
};

export default Menu;
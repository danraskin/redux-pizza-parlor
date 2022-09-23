import React from 'react'
import './PizzaItem.css';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PizzaItem({ pizza, accrueTotal, reduceTotal }) {
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
        reduceTotal(pizza.price);

    }

    const addToCart = () => {
        const action = {
            type: 'ADD_TO_CART',
            payload: pizza,
        }
        console.log(pizza)
        dispatch(action);
        setCartStatus(false);
        accrueTotal(pizza.price);
    }

    return (
        <Card sx={{ maxWidth: 550 }}>
            <CardMedia
                component="img"
                height="200"
                image={pizza.image_path}
            />
            <CardContent>
                <Typography variant='h4'>{pizza.name}</Typography>
                <Typography variant='h5' color="secondary">${pizza.price}</Typography>
                <Typography variant='body2' textAlign="center">{pizza.description}</Typography>

            </CardContent>
            <CardActions>
                {cartStatus ?
                    <Button onClick={addToCart} variant='contained'>Add to Order</Button>
                    :
                    <Button onClick={removeFromCart} variant='contained' color='error'>Remove</Button>
                }
            </CardActions>

        </Card>

    )
};

export default PizzaItem;

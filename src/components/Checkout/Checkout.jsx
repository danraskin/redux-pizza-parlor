import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//table formatting
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();
    const order  = useSelector(store=>store.orderDetails[0]) //takes in partially formed data object.
    const cart = useSelector(store=>store.cart); //table maps pizzas in 'cart'.
    const totalCost  = useSelector(store=>store.totalCost) //display total

    console.log (order);
    console.log(cart);

    const handleClick = () => { //pushes user back to home at checkout
        history.push('/');
    }

//formats data object. pizza quantity is hard-coded, per given project parameters.
    const makeOrderObject = () => {
        let pizzasToOrder = [];
        let totalPrice = 0;        
        cart.map(pizzaInCart=> {
            let pizza = {
                id: pizzaInCart.id,
                quantity: 1
            }
            totalPrice += Number(pizzaInCart.price);
            pizzasToOrder.push(pizza);
        })

        order.pizzas = pizzasToOrder;
        order.total = totalPrice;
    }

    const postOrder = (event) => {
        event.preventDefault();
        makeOrderObject();
        console.log(order);
        axios({
            method: 'POST',
            url: '/api/order',
            data: order
        }).then((response)=> {
            handleClick(); //moves to home page
            const actionCart = { type: 'CLEAR_CART' }; //clears all data.
                dispatch(actionCart);
            const actionOrder = { type: 'CLEAR_ORDER' };
                dispatch(actionOrder);
            const actionTotal = { type: 'CLEAR_TOTAL' };
                dispatch(actionTotal)
        }).catch((error) => {
            console.log('error in postOrder: ',error);
        })
    }

//to do: utilize MUI 'spanning table'
//checkout render BREAKS if order information is incomplete. only matters for re-load/troubleshooting.
    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{order.customer_name}</p>
            <p>{order.street_address}</p>
            <p>{order.city}, {order.zip}</p>
            <p>{order.type}</p>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      Pizza
                    </TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {cart.map((pizza, i)=> {
                            return (
                                <TableRow key={i}>
                                    <TableCell aligh="left">{pizza.name}</TableCell>
                                    <TableCell align="right">${pizza.price}</TableCell>
                                </TableRow>
                            )
                        })}
                    <TableRow align="left">
                      <TableCell ></TableCell>
                      <TableCell align="right">Total: ${totalCost}</TableCell>
                    </TableRow>
                    <TableRow align="right">
                      <TableCell align="left"></TableCell>
                      <TableCell align="right"><Button onClick={(event) => postOrder(event)}>SUBMIT</Button></TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        </>
    );
}

export default Checkout;
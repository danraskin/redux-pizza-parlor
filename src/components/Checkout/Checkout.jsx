import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();
    const order  = useSelector(store=>store.orderDetails[0]) //takes in fully formed data object.
    const cart = useSelector(store=>store.cart); //table maps pizzas in 'cart'.
    console.log (order);
    console.log(cart);

    const handleClick = () => {
        history.push('/');
    }

    //properly formatted order object. needs info in 'order', pizza, and TOTAL.

    const orderObject = order;

    const makeOrderObject = () => {
        const pizzasToOrder = [];
        let totalPrice = 0;        
        cart.map(pizzaInCart=> {
            let pizza = {
                id: pizzaInCart.id,
                quantity: 1
            }
            
            totalPrice += Number(pizzaInCart.price) ;
            pizzasToOrder.push(pizza);
        })

        orderObject.pizzas = pizzasToOrder;
        orderObject.total = totalPrice;
    }

    const postOrder = (event) => {
        event.preventDefault();
        makeOrderObject();
        console.log(orderObject);
        axios({
            method: 'POST',
            url: '/api/order',
            data: orderObject
        }).then((response)=> {
            handleClick();
            const actionCart = { type: 'CLEAR_CART' };
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
//set button to LINK to "/"
    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>{order.customer_name}</p>
            <p>{order.street_address}</p>
            <p>{order.city}, {order.zip}</p>
            <p>{order.type}</p>
            <table id="orderReview">
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza, i)=> {
                        return (
                            <tr key={i}>
                                <td>{pizza.name}</td>
                                <td>{pizza.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h3>Total: {order.total}</h3>
            <form onSubmit={(event) => postOrder(event)}>
                <button type='submit'>SUBMIT</button>
            </form>
        </>
    );
}

export default Checkout;
import axios from 'axios';
import { useSelector } from 'react-redux';

function Checkout() {

    const order  = useSelector(store=>store.orderDetails) //takes in fully formed data object.
    const cart = useSelector(store=>store.cart); //table maps pizzas in 'cart'.
console.log (order);
console.log(cart);


    const postOrder = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/api/order',
            data: order
        }).then((response)=> {
            console.log(response);
        }).catch((error) => {
            console.log('error in postOrder: ',error);
        })
    }
//to do: utilize MUI 'spanning table'
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
                        <td>Pizza</td>
                        <td>Cost</td>
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
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Checkout;
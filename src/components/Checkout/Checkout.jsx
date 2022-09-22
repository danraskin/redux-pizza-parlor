import axios from 'axios';
import { useSelector } from 'react-redux';

function Checkout() {

    const order  = useSelector(store=>store.orderDetails)

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

    return (
        <form onSubmit={(event) => postOrder(event)}>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Checkout;
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function OrderForm() {

    const [customer_name, setName] = useState('');
    const [street_address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Customer Name:', customer_name);
        console.log('Customer Address:', street_address);
        console.log('City:', city);
        console.log('Zip:', zip);
        console.log('Type:', type);
        const action = {
            type: 'ADD_CLIENT_INFO',
            payload: {customer_name, street_address, city, zip, type}
        };
        dispatch(action);
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setType('');
        handleClick();
    }

    const handleClick = () => {
        history.push('/checkout');
    }

    return(
        <form onSubmit={handleSubmit} className="Customer Info">
            <h2>Step 2: Customer Information</h2>
            <input
                required
                type="text"
                placeholder="Name"
                value={customer_name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                required
                type="text"
                placeholder="Street Address"
                value={street_address}
                onChange={(event) => setAddress(event.target.value)}
            />
            <input
                required
                type="text"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <input
                required
                type="number"
                placeholder="Zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
            />
            <input 
                type="radio" 
                name="type"
                value="pickup"
                onChange={(event) => setType(event.target.value)}
            />
            <label>Pickup</label><br/>
            <input 
                type="radio" 
                name="type" 
                value="delivery"
                onChange={(event) => setType(event.target.value)}
            />
            <label>Delivery</label><br/>  
            <button type="submit">Next</button>
        </form>
    )
}

export default OrderForm;
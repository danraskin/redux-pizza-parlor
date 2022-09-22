import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


function OrderForm() {

    const [customer_name, setName] = useState('');
    const [street_address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const action = {
            type: 'ADD_CLIENT_INFO',
            payload: {customer_name, street_address, city, zip, type:aklsdfhglas}
        }
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

            <input type="radio" id="Pickup" name="type" value={pickup}/>
            <label htmlFor="Pickup">Pickup</label><br/>
            <input type="radio" id="Delivery" name="type" value={delivery}/>
            <label htmlFor="Delivery">Delivery</label><br/>  
            
            <button type="submit">Next</button>
        </form>
    )
}

export default OrderForm;
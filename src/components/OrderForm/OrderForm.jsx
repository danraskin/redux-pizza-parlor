import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

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
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit} className="Customer Info">
                <h2>Step 2: Customer Information</h2>
                <Paper elevation='6'>
                    <TextField
                        required
                        id="outlined-basic" 
                        variant="outlined"
                        type="text"
                        label="Name"
                        value={customer_name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-basic" 
                        variant="outlined"
                        type="text"
                        label="Street Address"
                        value={street_address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-basic" 
                        variant="outlined"
                        type="text"
                        label="City"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-basic" 
                        variant="outlined"
                        type="number"
                        label="Zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                    />

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                        >
                            <FormControlLabel 
                                value="delivery" 
                                control={<Radio />} 
                                label="Delivery"
                                onChange={(event) => setType(event.target.value)} 
                            />
                            <FormControlLabel 
                                value="pickup" 
                                control={<Radio />} 
                                label="Pickup"
                                onChange={(event) => setType(event.target.value)}
                            />
                        </RadioGroup>
                    </FormControl>
                <Button type="submit" variant="outlined">Next</Button>
                </Paper>
            </form>
        </Container>
    )
}

export default OrderForm;
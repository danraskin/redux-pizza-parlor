import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function OrderForm() {

    const [customer_name, setName] = useState('');
    const [street_address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState(false);

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

    const clearForm = () => {
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setType('');
    }

    const handleClick = () => {
        history.push('/checkout');
    }

    return(
        <Card style={{maxWidth:700, margin:"0 auto", padding:"20px 5px"}}>
            <CardContent>
                <Typography gutterBottom variant="h5">Step 2: Customer Information</Typography>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">Please complete form and proceed to checkout.</Typography>
                <form onSubmit={handleSubmit} className="Customer Info">
                    <Grid container spacing={2}>
                        <Grid xs={12} item>
                            <TextField required id="outlined-basic" variant="outlined" type="text" label="Name" placeholder="Enter Name" value={customer_name} onChange={(event) => setName(event.target.value)} fullWidth/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField required id="outlined-basic" variant="outlined" type="text" label="Street Address" placeholder="Enter Street Address" value={street_address} onChange={(event) => setAddress(event.target.value)} fullWidth/>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <TextField required id="outlined-basic" variant="outlined" type="text" label="City" placeholder="Enter City" value={city} onChange={(event) => setCity(event.target.value)} fullWidth/>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <TextField required id="outlined-basic" variant="outlined" type="number" label="Zipcode" placeholder="Enter Zipcode" value={zip} onChange={(event) => setZip(event.target.value)} fullWidth/>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                    <FormControlLabel value="delivery" checked={type === 'delivery'} control={<Radio required/>} label="Delivery" onChange={(event) => setType(event.target.value)} />
                                    <FormControlLabel value="pickup" checked={type === 'pickup'} control={<Radio />} label="Pickup" onChange={(event) => setType(event.target.value)}/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                        <Button type="submit" variant="contained" fullWidth>Checkout</Button>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                        <Button onClick={clearForm} variant="outlined" fullWidth>Clear Form</Button>
                        </Grid>
                        <Grid xs={12} sm={4} item>
                        <Button variant="contained" color="error" disabled fullWidth>Change Order</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default OrderForm;
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState, setState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function Header() {

    const totalCost  = useSelector(store=>store.totalCost)
    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <p>Total: ${totalCost}</p>
    return (
        <header>
            <AppBar position="fixed" color='secondary'>
                <Toolbar>
                    <Typography variant='h2' sx={{ flexGrow: 1 }}>Prime Pizza</Typography>
                    {/* <h1 className='App-title' >Prime Pizza</h1> */}
                    <Typography variant='h5' id="ordertotal" edge="end">
                        {/* <ShoppingCartIcon /> */}
                        Total: ${totalCost}
                    </Typography>
                    {/* <h2 alignContent="end">Total: ${totalCost}</h2> */}
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Header;
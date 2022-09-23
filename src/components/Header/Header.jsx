import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState, setState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header(totalCost) {
    const order = useSelector(store => store.orderDetails)
    const total = totalCost.totalCost;
    console.log('header', total);

        return (
            <header>
                <AppBar position="fixed" color='secondary'>
                    <Toolbar>
                        <Typography variant='h2' sx={{ flexGrow: 1 }}>Prime Pizza</Typography>
                        <Typography variant='h5' id="ordertotal" edge="end">Total: $ {Math.max(total.toFixed(2), 0.00)}</Typography>
                    </Toolbar>
                </AppBar>
            </header>
        )
    };

export default Header;
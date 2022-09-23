import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI IMPORTS
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// /api/order

function Admin() {
    // grab orders on page load
    useEffect(() => {
        console.log('in UseEffect');
        refreshOrders();
    }, []);

    const dispatch = useDispatch();
    const orders = useSelector(store => store.adminOrders);

    // grab data from the server for the orders 
    const refreshOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        })
            .then((response) => {
                console.log(response.data);
                const action = {
                    type: 'GET_ADMIN_ORDERS',
                    payload: response.data
                }
                dispatch(action);

            })
            .catch((error) => {
                console.log('Error in GET', error);
            })
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name:</TableCell>
                            <TableCell>Time Order Placed:</TableCell>
                            <TableCell>Type:</TableCell>
                            <TableCell>Cost:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, i) => {
                            return (
                                <TableRow key={order[i].id}>
                                    <TableCell>{order[i].customer_name}</TableCell>
                                    <TableCell>{order[i].time}</TableCell>
                                    <TableCell>{order[i].type}</TableCell>
                                    <TableCell>{order[i].total}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default Admin;
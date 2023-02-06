import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

import { insurers } from './insurers';
import {InsurerValues, MailingAddressValues} from '../../Scaffold/MGAValues';

export default function InsurerTable() {

    //write a function to return insurer.insurerMailingAddress as a string
    const getMailingAddress = (insurerMailingAddress: MailingAddressValues) => {
        return `${insurerMailingAddress.streetAddress} 
                ${insurerMailingAddress.city}, 
                ${insurerMailingAddress.state} 
                ${insurerMailingAddress.zip}`;
    }

    return (
        <React.Fragment>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer>
                    <Table stickyHeader  aria-label='sticky table' >
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Active?</TableCell>
                                <TableCell>Insurer Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell
                                    sx={{fontStyle:"italic"}}
                                >Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {insurers.map((insurer) => (
                                <TableRow key={insurer.id}>
                                    <TableCell>{insurer.id}</TableCell>
                                    <TableCell>{insurer.insurerActive ? 'Yes' : 'No'}</TableCell>
                                    <TableCell>{insurer.insurerName}</TableCell>
                                    <TableCell>{insurer.insurerPhone}</TableCell>
                                    <TableCell>{insurer.insurerEmail}</TableCell>
                                    <TableCell>
                                        {getMailingAddress(insurer.insurerMailingAddress)}
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            component={Link}
                                            //to={`/insurer/${insurer.id}`}
                                            to={'/insurers/view'}
                                            variant="outlined"
                                            size="small"
                                        >Edit 
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>
    )
}
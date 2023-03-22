import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    TablePagination } from '@mui/material';

import { InsurerValues, INSURERS,  } from './InsurerValues';
import { MailingAddressValues } from '../Scaffold/MGAValues';

export default function InsurersTable(props: {insurers: InsurerValues[]}) {

    const insurers = props.insurers;

    //Setup page and rowsPerPage for pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    //Create a function to handle page changes
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    //Create a function to handle rows per page changes
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //write a function to return insurer.insurerMailingAddress as a string
    const getMailingAddress = (insurerMailingAddress: MailingAddressValues) => {
        return `${insurerMailingAddress.streetAddress} 
                ${insurerMailingAddress.city}, 
                ${insurerMailingAddress.state} 
                ${insurerMailingAddress.zip}`;
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{maxHeight: 600}}>
                <Table stickyHeader  aria-label='sticky table' >
                    <TableHead>
                        <TableRow sx={{backgroundColor:"gray"}}>
                            <TableCell>Status?</TableCell>
                            <TableCell>Insurer Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {insurers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((insurer : InsurerValues) => (
                            <TableRow key={insurer.id}>
                                <TableCell>{insurer.insurerStatus}</TableCell>
                                <TableCell>
                                    <Link to={`/insurers/${insurer.id}`}>
                                        {insurer.insurerName}
                                    </Link>
                                </TableCell>
                                <TableCell>{insurer.insurerPhone}</TableCell>
                                <TableCell>{insurer.insurerEmail}</TableCell>
                                <TableCell>
                                    {getMailingAddress(insurer.insurerMailingAddress)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={insurers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
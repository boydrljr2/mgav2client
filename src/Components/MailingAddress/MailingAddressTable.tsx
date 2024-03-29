import React from 'react';
import {Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, Typography, Button } from '@mui/material';
 
import { mailingAddresses} from './MailingAddressData';


//Create a function called MailingAddressTable to display mailing addresses in a Table with headers and an Edit button for each row
export default function MailingAddressTable() {

    //Setup page and rowsPerPage for pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    //Create a function to handle page changes
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    //Create a function to handle rows per page changes
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 480 }}>
                    <Table stickyHeader  aria-label='sticky table' >
                        <TableHead>
                            <TableRow
                            >
                                <TableCell>Address Name</TableCell>
                                <TableCell>Street Address</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>Zip</TableCell>
                                {/* <TableCell sx={{fontStyle:"italic"}}>Actions</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mailingAddresses
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((mailingAddress) => (
                                    <TableRow key={mailingAddress.streetAddress1}>
                                        <TableCell>{(mailingAddress.name !== undefined) 
                                            ? 
                                            mailingAddress.name 
                                            : 
                                            mailingAddress.streetAddress1 }
                                        </TableCell>
                                        <TableCell>{mailingAddress.streetAddress1}</TableCell>
                                        <TableCell>{mailingAddress.city}</TableCell>
                                        <TableCell>{mailingAddress.state.value}</TableCell>
                                        <TableCell>{mailingAddress.zip}</TableCell>

                                    </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={mailingAddresses.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </React.Fragment>
    )
}


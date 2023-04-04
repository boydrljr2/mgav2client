import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
    TablePagination } from '@mui/material';
import { AgencyValues } from '../Scaffold/MGAValues';

export default function AgencyTable(props: {agencies: AgencyValues[]}) {

    const agencies = props.agencies;

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

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{maxHeight: 600}}>
                <Table stickyHeader  aria-label='sticky table' >
                    <TableHead>
                        <TableRow sx={{backgroundColor:"gray"}}>
                            <TableCell>Status?</TableCell>
                            <TableCell>Agency Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agencies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((agency : AgencyValues) => (
                            <TableRow key={agency.id}>
                                <TableCell>{agency.status.value}</TableCell>
                                <TableCell>
                                    <Link to={`/agencies/${agency.id}`}>
                                        {agency.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{agency.phone}</TableCell>
                                <TableCell>{agency.principalEmail}</TableCell>
                                <TableCell>"agency.mailingAddress"</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={agencies.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
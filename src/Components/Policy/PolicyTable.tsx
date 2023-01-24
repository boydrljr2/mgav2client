import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

import { policies } from './PolicyValues';


export default function PolicyTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

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
                            <TableRow>
                                <TableCell>Policy Number</TableCell>
                                <TableCell>Insurer</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Agency</TableCell>
                                <TableCell>Insured</TableCell>
                                <TableCell sx={{fontStyle:"italic"}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {policies
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((policy) => (
                                    <TableRow key={policy.id}>
                                        <TableCell>{policy.policyNumber}</TableCell>
                                        <TableCell>{policy.product.insurer.insurerName}</TableCell>
                                        <TableCell>{policy.product.productName}</TableCell>
                                        <TableCell>{policy.product.insuranceType}</TableCell>
                                        <TableCell>{policy.agency.agencyName}</TableCell>
                                        <TableCell>
                                            {policy.insured.personName.firstName} + " " 
                                                + {policy.insured.personName.middleName} + " "
                                                + {policy.insured.personName.lastName}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                component={Link}
                                                /* to={`/policies/${policy.id}`} */
                                                to={`/policies/view`}
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component='div'
                    count={policies.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </React.Fragment>

    )
}
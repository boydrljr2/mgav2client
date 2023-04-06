import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

import { POLICIES } from '../Scaffold/MGAValues';

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
                                <TableCell>Asset</TableCell>
                                <TableCell>Agency</TableCell>
                                <TableCell>Insured</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {POLICIES
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((policy) => (
                                    <TableRow key={policy.id}>
                                        <TableCell>
                                            <Link to={`/policies/${policy.id}`}>
                                            {policy.policyNumber}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{policy.product.insurer.name}</TableCell>
                                        <TableCell>{policy.product.name}</TableCell>
                                        <TableCell>{policy.product.assetType.value}</TableCell>
                                        <TableCell>{policy.agency.name}</TableCell>
                                        <TableCell>{policy.insured.name}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component='div'
                    count={POLICIES.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </React.Fragment>

    )
}
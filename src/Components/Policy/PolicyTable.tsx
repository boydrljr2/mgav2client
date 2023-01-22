import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { policies } from './PolicyValues';
import { getPopperUnstyledUtilityClass } from '@mui/base';


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
                                        <TableCell>{policy.insured.insuredName}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>

    )
}
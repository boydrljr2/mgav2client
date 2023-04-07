import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { MailingAddressValues, AgencyValues } from '../Scaffold/MGAValues';
import { AvatarSXBuilder }  from '../Scaffold/FieldParts/AvatarSXBuilder';

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

    const getMailingAddress = (agencyMailingAddress : MailingAddressValues) => {

        //If the mailing address is undefined return an empty string
        if (agencyMailingAddress === undefined) return "No Mailing Address";
        return agencyMailingAddress.streetAddress1 + " " + 
                agencyMailingAddress.streetAddress2 + " " + 
                agencyMailingAddress.city + " " + 
                agencyMailingAddress.state.value + " " + 
                agencyMailingAddress.zip;
    }           

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{maxHeight: 600}}>
                <Table stickyHeader  aria-label='sticky table' sx={{tableLayout: "auto"}} >
                    <TableHead sx={{color: 'white', fontStyle: 'bold', bgcolor:"primary.main"}}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{color: 'primary.main'}} >Status?</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>Agency Name</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>License Number</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>Phone</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>Email</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>Website</TableCell>
                            <TableCell sx={{color: 'primary.main'}}>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agencies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((agency : AgencyValues) => (
                            <TableRow key={agency.id}>
                                <TableCell>
                                    <Avatar 
                                        {...AvatarSXBuilder(agency.name)}
                                        alt={agency.name} 
                                        variant='square'
                                    />
                                </TableCell>
                                <TableCell>{agency.status.value}</TableCell>
                                <TableCell>
                                    <Link to={`/agencies/${agency.id}`}>
                                        {agency.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{agency.licenseNumber}</TableCell>
                                <TableCell>{agency.phone}</TableCell>
                                <TableCell>{agency.principalEmail}</TableCell>
                                <TableCell>{agency.website}</TableCell>
                                <TableCell>{getMailingAddress(agency.mailingAddress)}</TableCell>
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
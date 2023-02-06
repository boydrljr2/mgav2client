import React from 'react';

import { Avatar, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material'

import { AutoValues } from '../../Scaffold/MGAValues';

export default function LienholderView(props : {autoUnits : AutoValues[]}) {

    console.log('LienholderView props: ', props.autoUnits);

    return (
        <React.Fragment>
            <Typography
                sx={{color: 'primary.main', fontSize: '1.2rem'}}
            >Lienholders
            </Typography>
            {props.autoUnits.map((auto) => (
                <TableContainer>
                    <Table stickyHeader size='small' aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: "bold"}}>Unit</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} >Lienholder Name</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} >Mailing Address</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {auto.lienholders?.map((lienholder) => (
                                    <TableRow key={lienholder.lienholderName}>
                                        <TableCell>{auto.unit}</TableCell>
                                        <TableCell>{lienholder.lienholderName}</TableCell>
                                        <TableCell>{lienholder.lienholderMailingAddress.streetAddress}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </React.Fragment>

    )
}
import React from 'react';

import { Avatar, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material'

import { AutoValues } from '../Scaffold/MGAValues';

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
                            <TableRow key={auto.unit}> 
                                <TableCell>
                                    <Avatar sx={{bgcolor:'primary.main'}}>{auto.unit}</Avatar>
                                </TableCell>
                                <TableCell 
                                    sx={{fontWeight: "bold", fontSize:"1.2rem"}}                                             
                                >{auto.year} {auto.make} {auto.model}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontWeight: "bold"}}>Lienholder Name</TableCell>
                                <TableCell sx={{fontWeight: "bold"}}>Mailing Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {auto.lienholders?.map((lienholder) => (
                                <TableRow key={lienholder.name}>
                                    <TableCell>{lienholder.name}</TableCell>
                                    <TableCell>
                                        {lienholder.mailingAddress.streetAddress1 + " "
                                        + lienholder.mailingAddress.city + ", "
                                        + lienholder.mailingAddress.state + " "
                                        + lienholder.mailingAddress.zip}
                                    </TableCell>
                                </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
        </React.Fragment>

    )
}
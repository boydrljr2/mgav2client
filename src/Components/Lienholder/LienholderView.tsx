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
                                >{auto.autoYear} {auto.autoMake} {auto.autoModel}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontWeight: "bold"}}>Lienholder Name</TableCell>
                                <TableCell sx={{fontWeight: "bold"}}>Mailing Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {auto.lienholders?.map((lienholder) => (
                                <TableRow key={lienholder.lienholderName}>
                                    <TableCell>{lienholder.lienholderName}</TableCell>
                                    <TableCell>
                                        {lienholder.lienholderMailingAddress.streetAddress + " "
                                        + lienholder.lienholderMailingAddress.city + ", "
                                        + lienholder.lienholderMailingAddress.state + " "
                                        + lienholder.lienholderMailingAddress.zip}
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
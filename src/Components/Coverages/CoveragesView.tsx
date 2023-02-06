import React from 'react';
import { Avatar, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material'


import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-data-grid-premium/themeAugmentation';

import {AutoValues, CoverageValues} from '../../Scaffold/MGAValues'


export default function CoveragesView(props : {autos : AutoValues[]}) {

    let USDollar = new Intl.NumberFormat(
        'en-us', {
            style: 'currency', 
            currency: 'USD', 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2
        })

// calculate the total premium for the policy using a reducer function
    const totalPremium = props.autos.reduce((acc, auto) => {
        return acc + auto.coverages.reduce((acc, coverage) => {
            return acc + coverage.coveragePremium
        }, 0)
    }, 0)

    return (
        <React.Fragment>
            <Typography
                sx={{color: 'primary.main', fontSize: '1.2rem'}}
            >Coverages
            </Typography>
            {props.autos.map((auto) => (
                <TableContainer>
                    <Table stickyHeader size='small' aria-label='sticky table'>
                        <TableHead>
                            <TableRow key={auto.unit}> 
                                <TableCell colSpan={1}>
                                    <Avatar sx={{bgcolor:'primary.main'}}>{auto.unit}</Avatar>
                                </TableCell>
                                <TableCell 
                                    colSpan={1}
                                    sx={{fontWeight: "bold", fontSize:"1.2rem"}}                                             
                                >{auto.autoYear} {auto.autoMake} {auto.autoModel}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontWeight: "bold"}} >Type</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} >Limits</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} >Deductible</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} >Premium</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {auto.coverages.map((coverage) => (
                                    <TableRow key={coverage.coverageType}>
                                        <TableCell>{coverage.coverageType}</TableCell>
                                        <TableCell>{coverage.coverageLimit}</TableCell>
                                        <TableCell>{coverage.coverageDeductible}</TableCell>
                                        <TableCell>{(USDollar.format(coverage.coveragePremium))}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>Total Premium</TableCell>
                            <TableCell sx={{fontWeight: "bold"}}>{USDollar.format(totalPremium)}</TableCell>
                        </TableRow>
                    </TableHead>
                </TableContainer>

        </React.Fragment>
    )
}


import React, { useContext} from 'react';

import { useFormContext, Controller,  } from 'react-hook-form';
import _  from 'lodash';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    } from '@mui/material';

import { OperatorValues, OperatorSchema, OperatorTableProps,
        } from '../Scaffold/MGAValues';
import { MGATableRowAlternating } from '../Scaffold/TableParts/TableParts';

// ------ Operator Table Function component ------
export default function OperatorTable () {
    
    const { watch } = useFormContext();
    const operators = watch('operators');
    console.log('operators', operators)

    return (
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Date Of Birth</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>SR22</TableCell>
                        <TableCell>Accidents & Violations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operators.map((operator : OperatorValues) => (
                        <MGATableRowAlternating key={operator.number}>
                            <TableCell>{operator.number}</TableCell>
                            <TableCell>{operator.name}</TableCell>
                            <TableCell>{operator.dateOfBirth.toLocaleDateString()}</TableCell>
                            <TableCell>{operator.type.value}</TableCell>
                            <TableCell>{operator.sr22.value}</TableCell>
                            <TableCell>{operator.accidentsViolations}</TableCell>
                        </MGATableRowAlternating>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
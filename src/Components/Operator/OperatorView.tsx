import React from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import { OperatorValues } from "../Scaffold/MGAValues";

//export default function OperatorTable( props: (operators<OperatorValues>) ) {

//write an export function signature called OperatorTable that takes in a prop called operators of type OperatorValues
export default function OperatorView( props: {operators: OperatorValues[]}) {
    
    const getDoB = (dob: Date | undefined ) => {
        if (dob === undefined) {
            return "";
        }
        return dob.getMonth() + "/" + dob.getDate() + "/" + dob.getFullYear();
    }

    return (
        <React.Fragment>
            <Typography
                sx={{color: 'primary.main', fontSize: '1.2rem'}}
            >Operators
            </Typography>
            <TableContainer sx={{maxHeight:400}}>
                <Table stickyHeader size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>SR22</TableCell>
                            <TableCell>Operator Name</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Accidents, Violations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.operators.map((operator) => (
                                <TableRow key={operator.id}>
                                    <TableCell>{operator.id}</TableCell>
                                    <TableCell>{operator.operatorType}</TableCell>
                                    <TableCell>{operator.sr22}</TableCell>
                                    <TableCell>
                                        {operator.name.first + " " 
                                        + ((operator.name.middle !== undefined) ? operator.name.middle : "") + " "
                                        + operator.name.last}
                                    </TableCell>
                                    <TableCell>{getDoB(operator.dateOfBirth)}</TableCell>
                                    <TableCell>{operator.operatorAccidentsViolations}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </React.Fragment>
    )
}


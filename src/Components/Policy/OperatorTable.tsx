import React from "react";
import { Link } from "react-router-dom";

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";

import { policies } from "./policies";
import { OperatorValues } from "./PolicyValues";

//export default function OperatorTable( props: (operators<OperatorValues>) ) {

//write an export function signature called OperatorTable that takes in a prop called operators of type OperatorValues
export default function OperatorTable( props: {operators: OperatorValues[]}) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (
        <React.Fragment>
            <TableContainer sx={{maxHeight:400}}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>SR22</TableCell>
                            <TableCell>Operator Name</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Accidents, Violations</TableCell>
                            <TableCell sx={{fontStyle:"italic"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.operators
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((operator) => (
                                <TableRow key={operator.id}>
                                    <TableCell>{operator.id}</TableCell>
                                    <TableCell>{operator.operatorType}</TableCell>
                                    <TableCell>{operator.sr22}</TableCell>
                                    <TableCell>
                                        {operator.personName.firstName + " " 
                                        + ((operator.personName.middleName !== undefined) ? operator.personName.middleName : "") + " "
                                        + operator.personName.lastName}
                                    </TableCell>
                                    <TableCell>{operator.operatorCoverageStatus}</TableCell>
                                    <TableCell>{operator.operatorAccidentsViolations}</TableCell>
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
                            ))}
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
        </React.Fragment>
    )
}


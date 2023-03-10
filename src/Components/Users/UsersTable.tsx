import React from 'react';
import { Link } from 'react-router-dom';
import {Paper, Typography, Button, 
    TableContainer, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, 
    } from '@mui/material';

import {UserValues} from './UserValues';

//Create a function called UsersTable to display users in a Table with headers and an Edit button for each row
export default function UsersTable(props: {users: UserValues[]}) {

    const users = props.users;

    //Setup page and rowsPerPage for pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    if (users.length === 0) {
        return (
            <Typography variant="h5" component="h2" gutterBottom>
                No users found
            </Typography>
        );
    }

    //Create a function to handle page changes
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    //Create a function to handle rows per page changes
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //Create a function to edit an existing user using UserEdit  
    /*const handleEditUser = () => {
        console.log("Edit an existing user");

    }
    */

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 480 }}>
                <Table stickyHeader  aria-label='sticky table' >
                    <TableHead>
                        <TableRow sx={{backgroundColor:"lightgray" }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Password</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Creator</TableCell>
                            {/* <TableCell sx={{fontStyle:"italic"}}>Actions</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Map through users to display each user */}
                        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user : UserValues) => (
                            <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={user.id}
                            >
                                <TableCell>
                                    <Link to={`/users/${user.id}`} >
                                        {user.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.password}</TableCell>
                                <TableCell>{user.image}</TableCell> 
                                <TableCell>{user.creatorName}</TableCell>
                                {/* <TableCell>
                                    <Button
                                        onClick={handleEditUser}
                                    >Edit
                                    </Button>
                                </TableCell>
                                */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
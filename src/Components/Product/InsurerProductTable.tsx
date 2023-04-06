import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } 
    from "@mui/material";

import { InsurerValues, INSURERS, InsurerProductTableValues, ProductValues, PRODUCTS } from "../Scaffold/MGAValues";

export default function InsurerProductTable( props: {insurerProductTableProps : InsurerProductTableValues} ) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { insurerProductTableProps } = props;

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <Paper elevation={3}  sx={{ width: "100%", overflow: "hidden" }}>
                <Typography variant='h6' sx={{color: 'primary.main', p:1, m:1}} >Products</Typography>
                <TableContainer sx={{ maxHeight: 480 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Asset Type</TableCell>
                                <TableCell>Rating Terr.</TableCell>
                                <TableCell>Insurer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {PRODUCTS
                                .filter((product : ProductValues) => product.insurer.id === insurerProductTableProps.insurerId )
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product : ProductValues) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        {product.name}
                                        {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
                                    </TableCell>
                                    <TableCell>{product.assetType.value}</TableCell>
                                    <TableCell>{product.defaultRatingTerritory.value}</TableCell>
                                    <TableCell>{product.insurer.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={PRODUCTS.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </React.Fragment>
    );
}
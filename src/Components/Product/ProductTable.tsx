import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } 
    from "@mui/material";

import { ProductValues, PRODUCTS } from "../Scaffold/MGAValues";

export default function ProductTable() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 480 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Asset Type</TableCell>
                                <TableCell>Rating Terr.</TableCell>
                                <TableCell>Insurer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {PRODUCTS
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

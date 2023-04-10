import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Paper, Box, Typography, Card, Button, Collapse, IconButton, 
        Table, TableBody, TableCell, tableCellClasses, TableContainer, 
        TableHead, TableRow, TablePagination
    } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import { PolicyRowValues, PolicyTableProps } from '../Scaffold/MGAValues';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.primary.dark,
      //set font to bold
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function PolicyTable( policyTableProps: PolicyTableProps ) {

    //Set table 'rows' to policyRows if policyRows is defined, otherwise set to empty array 
    const { policyRows } = policyTableProps;
    const policyRowsUndefined = (policyRows === undefined);
    const rows : PolicyRowValues[] = !policyRowsUndefined ? policyRows : [];
    
    //Pagination section
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //Create the Row component to enable the collapsible row
    function Row(props: { row: PolicyRowValues }) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label='expand row'
                            size='small'
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                    </TableCell>
                    <TableCell>
                        <Link to={`/policies/${row.id}`}>
                        {row.policyNumber}
                        </Link>
                    </TableCell>
                    <TableCell>{row.insuredName}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.periodStartDate}</TableCell>
                    <TableCell>{row.periodEndDate}</TableCell>
                    <TableCell>{row.agencyName}</TableCell>
                    <TableCell>{row.insurerName}</TableCell>
                    <TableCell>{row.productName}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell 
                        style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
                        colSpan={1}
                    >
                        <Collapse in={open} timeout='auto' unmountOnExit />
                    </TableCell>
                    <TableCell 
                        style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
                        colSpan={3}
                    >
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Card sx={{ margin: 1, p:1, borderColor:'primary.main' }}>
                                <Typography 
                                    variant='subtitle1' gutterBottom 
                                    component='div'
                                    sx={{color : 'primary.main', fontWeight: 'bold' }}
                                >
                                    Insured
                                </Typography> 
                                <Typography>
                                    {row.insuredName}
                                </Typography>
                                <Typography>
                                    {row.insuredPhone}
                                </Typography>
                                <Typography>      
                                    {row.insuredEmail}
                                </Typography>
                                <Typography>
                                    {row.insuredAddress}
                                </Typography>
                            </Card>
                        </Collapse>
                    </TableCell>
                    <TableCell 
                        style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
                        colSpan={3}
                    >
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Card sx={{ margin: 1, p:1, borderColor:'primary.main' }}>
                                <Typography 
                                    variant='subtitle1' gutterBottom 
                                    component='div'
                                    sx={{color : 'primary.main', fontWeight: 'bold' }}
                                >
                                    Agency
                                </Typography> 
                                <Typography>
                                    {row.agencyName}
                                </Typography>
                                <Typography>
                                    {row.agencyPhone}
                                </Typography>
                                <Typography>   
                                    {row.agencyEmail}
                                </Typography>
                                <Typography>
                                    {row.agencyAddress}
                                </Typography>
                            </Card>
                        </Collapse>
                    </TableCell>
                    <TableCell 
                        style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
                        colSpan={3}
                    >
                        <Collapse in={open} timeout='auto' unmountOnExit>
                            <Card sx={{ margin: 1, p:1, borderColor:'primary.main' }}>
                                <Typography 
                                    variant='subtitle1' gutterBottom 
                                    component='div'
                                    sx={{color : 'primary.main', fontWeight: 'bold' }}
                                >
                                    Insurer
                                </Typography> 
                                <Typography>
                                    {row.insurerName}
                                </Typography>
                                <Typography>
                                    {row.insurerPhone}
                                </Typography>
                                <Typography>   
                                    {row.insurerEmail}
                                </Typography>
                                <Typography>
                                    {row.insurerAddress}
                                </Typography>
                            </Card>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        )
    }



    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 800 }}>
                <Table stickyHeader  aria-label='sticky table' >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>   </StyledTableCell>
                            <StyledTableCell>Policy Number</StyledTableCell>
                            <StyledTableCell>Insured</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Start Date</StyledTableCell>
                            <StyledTableCell>End Date</StyledTableCell>
                            <StyledTableCell>Agency</StyledTableCell>
                            <StyledTableCell>Insurer</StyledTableCell>
                            <StyledTableCell>Product</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component='div'
                count={policyRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
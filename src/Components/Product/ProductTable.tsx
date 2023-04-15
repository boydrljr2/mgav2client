import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Box, Typography, Card, Button, Collapse, IconButton, Toolbar, Tooltip,
        Table, TableBody, TableCell, tableCellClasses, TableContainer, 
        TableHead, TableRow, TablePagination, TableSortLabel, FormControlLabel, Switch,
    } from '@mui/material';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

import { ProductRowValues, ProductTableProps } from '../Scaffold/MGAValues';
import { MGATableHeaderCell, MGATableRowAlternating4nPlus34 } from '../Scaffold/TableParts/TableParts';

// ------------------ Table Toolbar --------------------------------
interface TableToolbarProps {
    numSelected: number;
  }

function TableToolbar(props: TableToolbarProps) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Toolbar
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

//--------------- Table Header & Sorting components ---------------------------------------------
//Move these functions to a Scaffold > TableParts > TableParts.tsx file
type Data = ProductRowValues;
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  type Order = 'asc' | 'desc';
  
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
// If only supporting modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }
  //Create a .map function for building headCells from an array supplied by PolicyPage
  const headCells: readonly HeadCell[] = [
    {
      id              : 'name',
      numeric         : false,
      disablePadding  : false,
      label           : 'Product Name',
    },
    {
      id              : 'status',
      numeric         : false,
      disablePadding  : false,
      label           : 'Status',
    },
    {
      id              : 'assetType',
      numeric         : false,
      disablePadding  : false,
      label           : 'Asset Type',
    },
    {
      id              : 'state',
      numeric         : false,
      disablePadding  : false,
      label           : 'State'
    },
    {
      id              : 'defaultRatingTerritory',
      numeric         : false,
      disablePadding  : false,
      label           : 'Default Rating Territory'
    },
    {
      id              : 'effectiveDate',
      numeric         : false,
      disablePadding  : false,
      label           : 'Effective Date',
    },
    {
      id              : 'sr22',
      numeric         : false,
      disablePadding  : false,
      label           : 'SR22',
    },
    {
        id              : 'insurerName',
        numeric         : false,
        disablePadding  : false,
        label           : 'Insurer',
    }
  ];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'id';
const DEFAULT_ROWS_PER_PAGE = 5;

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
//Create the sortable Table Header Cells
function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (newOrderBy: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, newOrderBy);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <MGATableHeaderCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{color: "primary.main"}}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </MGATableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//----------------- Table Row component with collapsible details --------------
function Row(props: { row: ProductRowValues }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <MGATableRowAlternating4nPlus34 
                hover
                role='checkbox'
                tabIndex={-1}
                key={row.id}
                sx={{ cursor : 'pointer' }}
            >
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
                    <Link to={`/products/${row.id}`}>
                    {row.name}
                    </Link>
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.assetType}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.defaultRatingTerritory}</TableCell>
                <TableCell>{row.effectiveDate}</TableCell>
                <TableCell>{row.sr22}</TableCell>
                <TableCell>{row.insurerName}</TableCell>
            </MGATableRowAlternating4nPlus34>
            <MGATableRowAlternating4nPlus34>
                <TableCell 
                    sx={{ paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
                    colSpan={1}
                >
                    <Collapse in={open} timeout='auto' unmountOnExit />
                </TableCell>
                <TableCell 
                    sx={{
                      paddingBottom: 0, 
                      paddingTop: 0, 
                      verticalAlign: 'top' 
                    }} 
                    colSpan={8}
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
                                {row.insurerContactName}
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
                {/*
                <TableCell 
                    sx={{ 
                      paddingBottom: 0, paddingTop: 0, verticalAlign: 'top' }} 
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
                */}
            </MGATableRowAlternating4nPlus34>
        </React.Fragment>
    )
}

//---------------  Product Table Function components ---------------------------------------------
export default function ProductTable( productTableProps: ProductTableProps ) {

    //Set table 'rows' to productRows if productRows is defined, otherwise set to empty array 
    const { productRows } = productTableProps;
    const productRowsUndefined = (productRows === undefined);
    const rows : ProductRowValues[] = !productRowsUndefined ? productRows : [];
    
    //Pagination & Density section
    const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
    const [orderBy, setOrderBy] = React.useState<keyof Data>(DEFAULT_ORDER_BY);
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [visibleRows, setVisibleRows] = React.useState<Data[] | null>(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
    const [paddingHeight, setPaddingHeight] = React.useState(0);

    React.useEffect(() => {
        let rowsOnMount = stableSort(
          rows,
          getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
        );
        rowsOnMount = rowsOnMount.slice(
          0 * DEFAULT_ROWS_PER_PAGE,
          0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
        );
    
        setVisibleRows(rowsOnMount);
      }, []);
    
      const handleRequestSort = React.useCallback(
        (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => {
          const isAsc = orderBy === newOrderBy && order === 'asc';
          const toggledOrder = isAsc ? 'desc' : 'asc';
          setOrder(toggledOrder);
          setOrderBy(newOrderBy);
    
          const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
          const updatedRows = sortedRows.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          );
          setVisibleRows(updatedRows);
        },
        [order, orderBy, page, rowsPerPage],
      );
    
      const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
      };
    
      const handleClick = (event: React.MouseEvent<unknown>, policyNumber: string) => {
        const selectedIndex = selected.indexOf(policyNumber);
        let newSelected: readonly string[] = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, policyNumber);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    
        setSelected(newSelected);
      };
    
      const handleChangePage = React.useCallback(
        (event: unknown, newPage: number) => {
          setPage(newPage);
    
          const sortedRows = stableSort(rows, getComparator(order, orderBy));
          const updatedRows = sortedRows.slice(
            newPage * rowsPerPage,
            newPage * rowsPerPage + rowsPerPage,
          );
          setVisibleRows(updatedRows);
    
          // Avoid a layout jump when reaching the last page with empty rows.
          const numEmptyRows =
            newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;
    
          const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
          setPaddingHeight(newPaddingHeight);
        },
        [order, orderBy, dense, rowsPerPage],
      );
    
      const handleChangeRowsPerPage = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const updatedRowsPerPage = parseInt(event.target.value, 10);
          setRowsPerPage(updatedRowsPerPage);
    
          setPage(0);
    
          const sortedRows = stableSort(rows, getComparator(order, orderBy));
          const updatedRows = sortedRows.slice(
            0 * updatedRowsPerPage,
            0 * updatedRowsPerPage + updatedRowsPerPage,
          );
          setVisibleRows(updatedRows);
    
          // There is no layout jump to handle on the first page.
          setPaddingHeight(0);
        },
        [order, orderBy],
      );

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
        };
    
    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                {/* <TableToolbar numSelected={selected.length} /> */}
                <TableContainer sx={{ maxHeight: 800 }}>
                    <Table
                        sx={{ minWidth: 800 }} 
                        stickyHeader  aria-label='sticky table' 
                        size={dense ? 'small' : 'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows 
                                ? visibleRows.map((row, index) => {
                                    return (
                                        <Row key={row.id} row={row} />
                                    )
                                })
                                : null
                            }
                            {paddingHeight > 0 && (
                                <TableRow style={{ height: paddingHeight }}>
                                    <TableCell colSpan={12} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component='div'
                    count={productRows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label='Dense'
            />
        </Box>
    )
}
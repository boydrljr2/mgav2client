import * as React from 'react';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { Box, Paper, 
        Table, TableBody, TableCell, TableContainer, TableHead, 
        TablePagination, TableRow, TableSortLabel,
        Toolbar, Typography,
        Avatar, Checkbox, IconButton, Tooltip, 
        FormControlLabel, Switch }
      from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

import {USERS, USPSSTATEABBREVIATIONS, MailingAddressValues, 
        AgencyStatusValues, AGENCYSTATUSES, AgencyValues  } 
        from '../Scaffold/MGAValues';
import { AvatarSXBuilder }  from '../Scaffold/FieldParts/AvatarSXBuilder';
import { v4 as uuidv4 } from 'uuid';

/*
interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

*/

interface Data {
  //Identifiers
  id                  : string;
  legacyId            : string;
  name                : string;
  avatar              : string;
  irsName             : string; //Company name for Corp, personal name for individual agent
  taxId               : string; //FEIN or SSN
  status              : string;
  //Contact Info
  contactName        : string;
  phone              : string;
  principalEmail      : string;
  documentEmail       : string;
  website             : string;
  //mailingAddress      : MailingAddressValues;
  //License Info
  licenseNumber       : string;
  licenseDate         : string;
  licenseExpirationDate  : string;
  appointmentStatus  : string;
  agentGrade         : string;
  headquarterAgent   : string;
  locationCode      : string;
  commissionType    : string;  
  /*
  //Record stamps
  creatorId           : string;
  creatorName         : string;
  created             : Date;
  lastModified        : Date;
  */
} 

const rows : Data[] = [
  {
    //Identifiers ----------------
    id              : uuidv4(),
    legacyId        : "123456",
    name            : "Insure On The Spot Agency",
    avatar          : "/static/images/UnitedEquitableAvatar.jpg",
    irsName         : "Insure On The Spot Agency",
    taxId           : "36-1111111",
    status          : AGENCYSTATUSES[2].value,
    //Contact Info ----------------
    contactName     : "John Doe",
    phone           : "1-773-202-45060",
    principalEmail  : "support@iots.com",
    documentEmail   : "documents@iots.com",
    website         : "https://www.insuranceonthespot.com",
    /*
    mailingAddress  : {
        id              : uuidv4(),
        streetAddress1  : "5485 N Elston Ave",
        streetAddress2  : "",
        city            : "Chicago",
        state           : USPSSTATEABBREVIATIONS[17],
        zip             : "60630"
    },
    */
    //License Info ----------------
    licenseNumber       : "123456",
    //set licenseDate to January 1 2020
    licenseDate         : new Date(2020, 0, 1).toString(),
    //set licenseExpirationDate to January 1 2031
    licenseExpirationDate: new Date(2031, 0, 1).toString(),
    appointmentStatus   : "Active",
    agentGrade          : "A",
    headquarterAgent    : "Yes",
    locationCode        : "123456",
    commissionType      : "C",
  },
  {
    //Identifiers ----------------
    id              : uuidv4(),
    legacyId         : "008164",
    name            : "Freeway Insurance Serv Amercia LLC",
    avatar          : "/static/images/FreewayInsuranceAvatar.jpg",
    irsName         : "Freeway Insurance Serv Amercia LLC",
    taxId           : "22-1234567",
    status          : AGENCYSTATUSES[2].value,
    //Contact Info
    contactName     : "Lima Mike",
    phone           : "(312) 517-9046",
    principalEmail  : "support@freewayinsure.com",
    documentEmail   : "documents@freewayinsure.com",
    website         : "https://www.freewayinsurance.com",
    /*
    mailingAddress : {
        id              : uuidv4(),
        streetAddress1  : "4712 W Cermak Rd",
        streetAddress2  : "",
        city            : "Cicero",
        state           : USPSSTATEABBREVIATIONS[17],
        zip             : "60804"
    },
    */
    //License Info
    licenseNumber   : "123456",
    //set licenseDate to January 29, 2010 11:13:00 AM
    licenseDate     : new Date(2010, 0, 29, 11, 13, 0).toString(),
    //set licenseExpirationDate to January 29, 2030 11:13:00 AM
    licenseExpirationDate: new Date(2030, 0, 29, 11, 13, 0).toString(),
    appointmentStatus   : "Active",
    agentGrade          : "A",
    headquarterAgent    : "Yes",
    locationCode    : "123456",
    commissionType  : "C",
    /*
    //Record stamps
    creatorId       : USERS[0].id,
    creatorName     : USERS[0].name,
    created         : new Date(),
    lastModified    : new Date()
    */
  },
  {
    //Identifiers ----------------
    id              : uuidv4(),
    legacyId        : "000224",
    name            : "CRC Insurance Services",

    avatar          : "/static/images/CRCInsuranceAvatar.jpg",
    irsName         : "CRC Insurance Services",
    taxId           : "33-1234567",
    status          : AGENCYSTATUSES[2].value,
    //Contact Info
    contactName     : "Sierra Tango",
    phone           : "770-392-2700",
    principalEmail  : "support@crcis.com",
    documentEmail   : "docs@crcis.com",
    website         : "https://www.crcinsurance.com",
    /*
    mailingAddress : {
        id              : uuidv4(),
        streetAddress1  : "5485 N Elston Ave",
        streetAddress2  : "",
        city            : "Atlanta",
        state           : USPSSTATEABBREVIATIONS[11],
        zip             : "60630"
    },
    */
    //License Info
    licenseNumber   : "123456",
    //set licenseDate to 5 years ago
    licenseDate     : new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toString(),
    //set licenseExpirationDate to 5 years from now
    licenseExpirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toString(),
    appointmentStatus   : "Active",
    agentGrade          : "A",
    headquarterAgent    : "Yes",
    locationCode    : "123456",
    commissionType  : "C",
    /*
    //Record stamps
    creatorId       : USERS[0].id,
    creatorName     : USERS[0].name,
    created         : new Date(),
    lastModified    : new Date()
    */
  },
];


console.log('rows: ', rows);

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

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
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

const headCells: readonly HeadCell[] = [
  {
    id              : 'name',
    numeric         : false,
    disablePadding  : false,
    label           : 'Name',
  },
  {
    id              : 'legacyId',
    numeric         : false,
    disablePadding  : false,
    label           : 'Legacy ID',
  },
  {
    id              : 'taxId',
    numeric         : false,
    disablePadding  : false,
    label           : 'Tax ID'
  },
  {
    id              : 'contactName',
    numeric         : false,
    disablePadding  : false,
    label           : 'Contact Name'
  }
];

const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'name';
const DEFAULT_ROWS_PER_PAGE = 5;

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

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
        <TableCell padding="checkbox">  
{/*        
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
*/}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
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
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
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

export default function AgencyTableEnhanced(props: {agencies: AgencyValues[]}) {
    
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
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
{/*        <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
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
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding="checkbox">
                          {/*
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                          */}
                            <Avatar 
                              {...AvatarSXBuilder(row.name)}
                              alt={row.name} 
                              variant='square'
                            />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Link to={`/agencies/${row.id}`}>
                            {row.name}
                          </Link>
                        </TableCell>
                        <TableCell>{row.legacyId}</TableCell>
                        <TableCell>{row.taxId}</TableCell>
                        <TableCell>{row.contactName}</TableCell>
                      </TableRow>
                    );
                  })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
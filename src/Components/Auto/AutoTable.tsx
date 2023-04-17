import React, {useState} from 'react';
import { useFieldArray, useFormContext, Controller} from 'react-hook-form';

import { Box, Paper, Collapse, TextField, FormControlLabel, Switch, IconButton,
        Table, TableBody, TableCell, TableContainer, TableHead, TableRow }
        from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { AutoValues } from '../Scaffold/MGAValues';
import { MGATableRowAlternating } from '../Scaffold/TableParts/TableParts';


export default function AutoTable () {

    const { control, formState: { errors, dirtyFields } } = useFormContext();

    const [dense, setDense] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const { fields } = useFieldArray({
        control,
        name: "autoUnits"
    });


    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };


    return (
        <Box sx={{ width: '100%' }}>
                <TableContainer >
                    <Table sx={{ width: '100%' }} aria-label="simple table" size={dense ? 'small' : 'medium'}>
                            {fields.map((item, index ) => (
                                <Paper 
                                    variant="outlined" 
                                    sx={{ mb:2, justifyContent:"flex-end", borderColor:'primary.dark'}}
                                >
                                    <TableBody>
                                        <TableRow
                                            key={item.id}
                                            sx={{ '& > *': { borderBottom: 'unset' } }}
                                        >
                                            <TableCell>
                                                <IconButton 
                                                    aria-label="expand row" 
                                                    size="small"
                                                    sx={{maxWidth:'20px'}} 
                                                    onClick={() => setOpen(!open)}>
                                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </TableCell>
                                            <TableCell >
                                                <Controller
                                                    name={`autoUnits.${index}.unit`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            id="auto-number" label="Unit"
                                                            variant="outlined" fullWidth 
                                                            sx={{maxWidth: '50px'}}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell >
                                                <Controller
                                                    name={`autoUnits.${index}.make`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            id="auto-make" label="Make"
                                                            variant="outlined" fullWidth 
                                                        />
                                                    )}
                                                />
                                            </TableCell>                            
                                            <TableCell >
                                                <Controller
                                                    name={`autoUnits.${index}.model`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            id="auto-model" label="Model"
                                                            variant="outlined" fullWidth 
                                                        />
                                                    )}
                                                />
                                            </TableCell>                            
                                            <TableCell >
                                                <Controller
                                                    name={`autoUnits.${index}.year`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            id="auto-year" label="Year"
                                                            variant="outlined" fullWidth 
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell  >
                                                <Controller
                                                    name={`autoUnits.${index}.vin`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <TextField
                                                            {...field}
                                                            id="auto-vin" label="VIN"
                                                            variant="outlined" fullWidth 
                                                            sx={{minWidth:'200px'}}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell >
                                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                    <Controller
                                                        name={`autoUnits.${index}.effectiveDate`}
                                                        control={control}
                                                        render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                                                        <DatePicker 
                                                            {...field}
                                                            inputRef={ref}
                                                            label="Effective Date"
                                                            renderInput={(inputProps) => (
                                                                <TextField 
                                                                    {...inputProps}
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'150px'}}
                                                                />
                                                                )}
                                                            />
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <TableCell colSpan={1}></TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.sym`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-sym" label="SYM"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'50px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.age`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-age" label="AGE"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'70px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell >
                                                        <Controller
                                                            name={`autoUnits.${index}.terr`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-terr" label="TERR"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell >
                                                        <Controller
                                                            name={`autoUnits.${index}.class`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-class" label="Class"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell >
                                                        <Controller
                                                            name={`autoUnits.${index}.pts`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-pts" label="PTS"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.safe`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-safe" label="Safe"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.trns`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-trns" label="TRNS"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.ren`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-ren" label="REN"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <TableCell colSpan={1}></TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.atf`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-atf" label="ATF"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.flcv`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-flcv" label="FLCV"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell >
                                                        <Controller
                                                            name={`autoUnits.${index}.vsrc`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-vsrc" label="VSRC"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" >
                                                        <Controller
                                                            name={`autoUnits.${index}.nown`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-nown" label="NOWN"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.defd`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-defd" label="DEFD"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.mc`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-mc" label="MC"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.av`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-av" label="AV"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Controller
                                                            name={`autoUnits.${index}.sm`}
                                                            control={control}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    {...field}
                                                                    id="auto-sm" label="SM"
                                                                    variant="outlined" fullWidth 
                                                                    sx={{minWidth:'100px'}}
                                                                />
                                                            )}
                                                        />
                                                    </TableCell>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Paper>
                            ))}
                    </Table>
                </TableContainer>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense"
            />
        </Box>
                                
    )
}

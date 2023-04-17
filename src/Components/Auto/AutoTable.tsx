import React from 'react';
import { useFieldArray, useFormContext, Controller} from 'react-hook-form';

import { Box, Paper, TextField, FormControlLabel, Switch,
        Table, TableBody, TableCell, TableContainer, TableHead, TableRow } 
        from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function AutoTable () {

    const { control, formState: { errors, dirtyFields } } = useFormContext();

    const [dense, setDense] = React.useState(false);

    const { fields } = useFieldArray({
        control,
        name: "autoUnits"
    });


    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Paper variant="outlined" sx={{width: '100%', margin:'auto', justifyContent:"flex-end"}}>
                <TableContainer >
                    <Table sx={{ width: '100%' }} aria-label="simple table" size={dense ? 'small' : 'medium'}>
                        <TableBody>
                            {fields.map((item, index ) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell component="th" scope="row" >
                                        <Controller
                                            name={`autoUnits.${index}.unit`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="auto-number" label="Unit"
                                                    variant="outlined" fullWidth 
                                                    sx={{m:1, maxWidth: '50px'}}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Controller
                                            name={`autoUnits.${index}.make`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="auto-make" label="Make"
                                                    variant="outlined" fullWidth sx={{m:1}}
                                                />
                                            )}
                                        />
                                    </TableCell>                            
                                    <TableCell component="th" scope="row">
                                        <Controller
                                            name={`autoUnits.${index}.model`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="auto-model" label="Model"
                                                    variant="outlined" fullWidth sx={{m:1}}
                                                />
                                            )}
                                        />
                                    </TableCell>                            
                                    <TableCell component="th" scope="row">
                                        <Controller
                                            name={`autoUnits.${index}.year`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="auto-year" label="Unit"
                                                    variant="outlined" fullWidth sx={{m:1}}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row" >
                                        <Controller
                                            name={`autoUnits.${index}.vin`}
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="auto-vin" label="VIN"
                                                    variant="outlined" fullWidth 
                                                    sx={{m:1, minWidth:'200px'}}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
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
                                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                                        />
                                                        )}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense"
            />
        </Box>
                                
    )
}

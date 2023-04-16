import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid, TextField, Autocomplete, 
         FormControl, OutlinedInput, InputLabel, InputAdornment } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { POLICYSTATUSES, ENDORSEMENTSTATUSES, USPSSTATEABBREVIATIONS } from '../Scaffold/MGAValues';


export default function PolicyHeader() {

    const { control, formState: { errors} } = useFormContext();

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={4} md={2}>
                    <Controller
                            name="policyNumber"
                            control={control}
                            render={({ field }) => (
                                <TextField {...field}
                                    id="policy-number" label="Policy number"
                                    variant="outlined" fullWidth  sx={{ m: 1 }}
                                    error={!!_.get(errors, 'policyNumber', null)}
                                    //@ts-ignore
                                    helperText={_.get(errors, 'policyNumber.message', '')}
                                />
                            )}
                        />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name="status"
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="status" 
                                options={POLICYSTATUSES}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Status"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'status', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'status?.message', '')}
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name="policyState"
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="status" 
                                options={USPSSTATEABBREVIATIONS}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Policy State"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'policyState', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'policyState?.message', '')}
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="applicationDate"
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Application Date"
                                renderInput={(inputProps) => (
                                    <TextField 
                                        {...inputProps}
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!_.get(errors, 'applicationDate', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, '.applicationDate?.message', '')}
                                    />
                                )}
                            />
                        )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="periodStartDate"
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Period Start Date"
                                renderInput={(inputProps) => (
                                    <TextField 
                                        {...inputProps}
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!_.get(errors, 'periodStartDate', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'periodStartDate?.message', '')}
                                    />
                                    )}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="periodEndDate"
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Period End Date"
                                renderInput={(inputProps) => (
                                    <TextField 
                                        {...inputProps}
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!_.get(errors, 'periodEndDate', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'periodEndDate?.message', '')}
                                    />
                                    )}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="endorsementNumber"
                        control={control}
                        render={({ field }) => (
                            <TextField {...field}
                                id="endorsement-number" 
                                label="Endorsement Number"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                                error={!!_.get(errors, 'endorsementNumber', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'endorsementNumber?.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name="endorsementStatus"
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="endorsement-status" 
                                options={ENDORSEMENTSTATUSES}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Status"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'endorsementStatus', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'endorsementStatus.message',  '')}
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="endorsementEffectiveDate"
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Endorsement Date"
                                renderInput={(inputProps) => (
                                    <TextField 
                                        {...inputProps}
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!_.get(errors, 'endorsementEffectiveDate', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'endorsementEffectiveDate?.message', '') }
                                    />
                                    )}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Controller 
                        name="endorsementAmount"
                        control={control}
                        render={({field}) => (
                            <FormControl 
                                variant="outlined" fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">
                                    Amount
                                </InputLabel>
                                <OutlinedInput
                                    {...field}
                                    id="endorsement-amount"
                                    startAdornment={
                                        <InputAdornment position="start">$</InputAdornment>
                                    }
                                    error={!!_.get(errors, 'endorsementAmount', null)}
                                    //@ts-ignore
                                    helperText={_.get(errors, 'endorsementAmount?.message', '')}
                                />
                            </FormControl>
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
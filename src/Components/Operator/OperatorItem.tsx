import React from 'react';
import { useForm, useFormContext, useFieldArray, Controller } from 'react-hook-form';
import _ from 'lodash';

import { Paper, Grid, Autocomplete, TextField, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { USPSSTATEABBREVIATIONS, OPERATORTYPES, SR22S, RELATIONTOINSURED } from '../Scaffold/MGAValues';

export default function OperatorItem (props: any) {
    const item = props.item;
    const index = props.index;
    const control = props.control;
    const errors = props.errors;

    return (
        <Paper 
            variant="outlined" 
            sx={{p:2, m:1, flexGrow:1, borderColor:'primary.dark' }}  
            key={item.number}
        >
            <Grid container direction="row" spacing={2} >
                <Grid item xs={4} md={2}>
                    <Controller
                        name={`operators.${index}.number`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-number" label="Number"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Controller 
                        name={`operators.${index}.name`}
                        control={control}
                        render={({field}) => (
                            <TextField 
                                {...field} 
                                id="operator-name" label="Name"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                                error={!!_.get(errors, `operators.${index}.name`, null)}
                                //@ts-ignore
                                helperText={_.get(errors, `operators.${index}.name.message`, '')}

                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name={`operators.${index}.type`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete 
                                {...field}
                                id="operator-type-value" 
                                options={OPERATORTYPES}
                                getOptionLabel={(option) => option.value}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Type"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <Controller 
                        name={`operators.${index}.sr22`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete 
                                {...field}
                                id="operator-type-value" 
                                options={SR22S}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="SR22"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name={`operators.${index}.dateOfBirth`}
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Date of Birth"
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
                </Grid>
                <Grid item xs={6} md={4}>
                    <Controller 
                        name={`operators.${index}.accidentsViolations`}
                        control={control}
                        render={({field}) => (
                            <TextField 
                                {...field} 
                                id="accidents" label="Accidents & Violations"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name={`operators.${index}.effectiveDate`}
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
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name={`operators.${index}.removedDate`}
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Removed Date"
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
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name={`operators.${index}.licenseNumber`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-license-number" label="License #"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name={`operators.${index}.licenseState`}
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
                                        label="Lic. State"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                    />}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name={`operators.${index}.licenseExpirationDate`}
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Lic. Expiration Date"
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
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller 
                        name={`operators.${index}.relationToInsured`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="operators-relation" 
                                options={RELATIONTOINSURED}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Relation to Insured"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                    />
                                }
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name={`operators.${index}.phone`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-phone" label="Phone"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name={`operators.${index}.email`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-email" label="Email"
                                variant="outlined" fullWidth  sx={{ m: 1 }}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Controller 
                        name={`operators.${index}.mailingAddress.streetAddress1`}
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="operator-street1" label="Street"
                                variant="outlined" sx={{margin:1}} fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Controller 
                        name={`operators.${index}.mailingAddress.streetAddress2`}
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="operator-street2" label="Street"
                                variant="outlined" sx={{margin:1}} fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Controller 
                        name={`operators.${index}.mailingAddress.city`}
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="operator-city" label="Zip"
                                variant="outlined" sx={{margin:1}} fullWidth
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Controller 
                        name={`operators.${index}.mailingAddress.state`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="operator-state" 
                                options={USPSSTATEABBREVIATIONS}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="State"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                    />
                                }
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Controller 
                        name={`operators.${index}.mailingAddress.zip`}
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="zip" label="Zip"
                                variant="outlined" sx={{margin:1}} fullWidth
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
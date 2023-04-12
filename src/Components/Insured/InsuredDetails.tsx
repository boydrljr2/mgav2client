import React from 'react';

import { useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid, TextField, Divider, Autocomplete, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { USPSSTATEABBREVIATIONS } from '../Scaffold/MGAValues';

export default function InsuredDetails() {

    const { control, formState: { errors} } = useFormContext();

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4} md={6}>
                    <Controller
                        name="insured.name"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="insured-name" label="Insured Name"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.name', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.name.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="insured.dateOfBirth"
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
                                        error={!!_.get(errors, 'insured.dateOfBirth', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'insured.dateOfBirth.message', '')}
                                    />
                                    )}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={2}  >
                    <Controller
                        name="insured.phone"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="insured-phone" label="Phone"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.phone', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.phone.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="insured.email"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="insured-email" label="Email"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.email', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.email.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Controller 
                        name="insured.mailingAddress.streetAddress1"
                        control={control} 
                        render={({field}) => (
                            <TextField
                                {...field} 
                                id="insured-mailingAddress-streetAddress" label="Street"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.mailingAddress.streetAddress1', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.mailingAddress.streetAddress1.message', '')}
                            />
                        )} 
                    />
                </Grid>
                <Grid item xs={12} >
                    <Controller 
                        name="insured.mailingAddress.streetAddress2"
                        control={control} 
                        render={({field}) => (
                            <TextField
                                {...field} 
                                id="insured-mailingAddress-streetAddress" 
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.mailingAddress.streetAddress2', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.mailingAddress.streetAddress2.message', '')}
                            />
                        )} 
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="insured.mailingAddress.city"
                        control={control}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                id="city" label="City"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.mailingAddress.city', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.mailingAddress.city.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                        <Controller 
                            name="insured.mailingAddress.state"
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
                                            label="State"
                                            variant="outlined" sx={{margin:1}} fullWidth
                                            error={!!_.get(errors, 'insured.mailingAddress.state', null)}
                                            //Fix this helperText method so that it takes
                                            //the error message from the schema without crashing
                                            //if the state value is null.
                                            helperText={
                                                (!!_.get(errors, 'insured.mailingAddress.state', null)
                                                ? "Please select a state" 
                                                : '')}
                                        />
                                    }
                                />
                            )}
                        />
                    </Grid>
                <Grid item xs={6} md={3}>
                    <Controller 
                        name="insured.mailingAddress.zip"
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="zip" label="Zip"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'insured.mailingAddress.zip', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'insured.mailingAddress.zip.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
            <Divider sx={{margin:2}}/>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="claimCount"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="claim-count" label="Claim Count"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'claimCount', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'claimCount.message', '')}
                            />
                        )}
                    />
                </Grid>                
                <Grid item xs={4} md={2}>
                    <Controller
                        name="policyRateType"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="policy-rate-type" label="Policy Rate Type"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'policyRateType', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'policyRateType.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="policyTerm"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="policy-term" label="Policy Term"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'policyTerm', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'policyTerm.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumInforce"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-inforce" label="Premium Inforce"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumInforce', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumInforce.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumInforce"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-inforce" label="Premium Inforce"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumInforce', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumInforce.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumWritten"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-written" label="Premium Written"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumWritten', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumWritten.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="statementDate"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="statement-date" label="Statement Date"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'statementDate', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'statementDate.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="territory"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="territory" label="Territory"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'territory', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'territory.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="yearsRenewed"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="years-renewed" label="Years Renewed"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'yearsRenewed', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'yearsRenewed.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
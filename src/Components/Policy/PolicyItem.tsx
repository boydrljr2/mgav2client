import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, TextField, Autocomplete, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, SubmitHandler, Controller, FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { USERS, AGENCIES, INSURERS, PRODUCTS, 
        POLICIES, PolicyValues, PolicyItemProps, PolicySchema, newPolicy, POLICYSTATUSES, USPSSTATEABBREVIATIONS} 
        from '../Scaffold/MGAValues'

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import MailingAddressItem from '../MailingAddress/MailingAddressItem';

export default function PolicyItem (policyItemProps : PolicyItemProps) {

    const navigate = useNavigate();

    const { policy } = policyItemProps;
    const policyUndefined = (policy === undefined);
    const methods = useForm<PolicyValues>({
        resolver: yupResolver(PolicySchema),
        defaultValues: !policyUndefined ? policy : newPolicy
    });

    const footerProps : ObjectFooterValues = !policyUndefined ?
    {
        creatorId       : policy.creatorId,
        creatorName     : policy.creatorName, 
        created         : policy.created, 
        lastModified    : policy.lastModified
    } :
    {   
        creatorId       : uuidv4(),
        creatorName     : "Yankee Zulu",
        created         : new Date(),
        lastModified    : new Date()
    }

    const { handleSubmit, control, formState: { errors } } = methods;
    const policyFormHandler : SubmitHandler<PolicyValues> = (data) => {
        console.log('Policy onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const policyIndex = POLICIES.findIndex(policy => policy.id === data.id);
        if (policyIndex === -1) {
            POLICIES.push(data);
        } else {
            POLICIES[policyIndex] = data;
        }
        navigate('/policies');
    }

    if (policyItemProps === undefined) {
        return (
            <Typography variant="h6" color='primary.main'>Policy not found</Typography>
        )
    }

    return (
        <FormProvider {...methods}>
            <Paper variant="outlined" sx={{p:2, m:1, flexGrow:1}}>
                <form onSubmit={handleSubmit(policyFormHandler)} >
                    <Grid container spacing={1}>
                        <Grid item xs={4} md={2}>
                            <Controller
                                    name="policyNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="policy-number" label="Policy number"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.policyNumber}
                                            helperText={errors.policyNumber?.message}
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
                                                error={!!errors.status}
                                                helperText={!!errors.status ? errors.status.message:''}
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
                                                error={!!errors.policyState}
                                                helperText={!!errors.policyState ? errors.policyState.message:''}
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
                                                error={!!errors.applicationDate}
                                                helperText={errors.applicationDate?.message}
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
                                                error={!!errors.periodStartDate}
                                                helperText={errors.periodStartDate?.message}
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
                                                error={!!errors.periodEndDate}
                                                helperText={errors.periodEndDate?.message}
                                            />
                                            )}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <ObjectFooter footerValues={footerProps} />
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item >
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save</Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/policies'
                            >Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}
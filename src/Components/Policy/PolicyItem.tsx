import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Box, Grid, Tabs, Tab, TextField, Autocomplete, Button, Typography,
         FormControl, OutlinedInput, InputLabel, InputAdornment, Divider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, SubmitHandler, Controller, FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { USPSSTATEABBREVIATIONS,
         POLICIES, PolicyValues, PolicyItemProps, PolicySchema, newPolicy, POLICYSTATUSES, 
         ENDORSEMENTSTATUSES} 
        from '../Scaffold/MGAValues'

import { TabPanel, tabAllyProps, MGATabs } from '../Scaffold/PageParts/TabParts';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import PolicyDetails from './PolicyDetails';
import InsuredDetails  from '../Insured/InsuredDetails';
import OperatorPolicyPanel from '../Operator/OperatorPolicyPanel';

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

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

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
                                        error={!!errors.endorsementNumber}
                                        helperText={errors.endorsementNumber?.message}
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
                                                error={!!errors.endorsementStatus}
                                                helperText={!!errors.endorsementStatus ? errors.endorsementStatus.message:''}
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
                                                error={!!errors.endorsementEffectiveDate}
                                                helperText={errors.endorsementEffectiveDate?.message}
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
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">
                                            Amount
                                        </InputLabel>
                                    <OutlinedInput
                                        {...field}
                                        id="endorsement-amount"
                                        startAdornment={
                                            <InputAdornment position="start">$</InputAdornment>
                                    }
                                    />
                                </FormControl>
                                )}
                            />
                        </Grid>
                    </Grid>
                    <ObjectFooter footerValues={footerProps} />
                    <Divider sx={{m:1, p:1}} />

                    {/*  Tabs for Details - Insured - Autos & Coverages - Operators */}
                    <Grid container sx={{ width: '100%' }}>
                        <Grid item xs={12} sx={{ borderColor: 'divider', mb:2, p:1 }}>
                            <MGATabs 
                                value={tabValue} 
                                onChange={handleTabChange} 
                                aria-label="basic tabs example"
                            >
                                <Tab label="Policy Details"  {...tabAllyProps}/>
                                <Tab label="Insured Details" {...tabAllyProps} />
                                <Tab label="Autos, Coverages & Liens" {...tabAllyProps} />
                                <Tab label="Operators" {...tabAllyProps} />
                            </MGATabs> 
                        </Grid>
                        <TabPanel value={tabValue} index={0}> 
                            <PolicyDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}> 
                            <InsuredDetails />
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}> AUTOS & COVERAGES </TabPanel>
                        <TabPanel value={tabValue} index={3}> 
                            <OperatorPolicyPanel />
                        </TabPanel>
                    </Grid>

                    {/* SAVE & CANCEL BUTTONS */}
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item >
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/policies'
                            >Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}
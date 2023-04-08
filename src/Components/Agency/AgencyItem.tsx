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

import { USERS, user1Id, user2Id,
        AGENCYSTATUSES, AgencyValues, AgencyItemValues, AgencySchema, AGENCIES } from '../Scaffold/MGAValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import MailingAddressItem from '../MailingAddress/MailingAddressItem';

export default function AgencyItem (agencyItemProps : AgencyItemValues) {

    const navigate = useNavigate();

    const { agency } = agencyItemProps;

    const agencyUndefined = (agency === undefined);

    const methods =
        useForm<AgencyValues>({
            resolver: yupResolver(AgencySchema),
            defaultValues: 
                {
                    id: (!agencyUndefined) ? agency.id : uuidv4(),
                    legacyId : (!agencyUndefined) ? agency.legacyId : '',
                    name: (!agencyUndefined) ? agency.name : '',
                    irsName: !agencyUndefined ? agency.irsName : '',
                    taxId: !agencyUndefined ? agency.taxId : '',
                    status: !agencyUndefined ? agency.status : {value: '', label: ''},

                    contactName: !agencyUndefined ? agency.contactName : '',
                    phone: !agencyUndefined ? agency.phone : '',
                    principalEmail: !agencyUndefined ? agency.principalEmail : '',
                    documentEmail: !agencyUndefined ? agency.documentEmail : '',
                    website: !agencyUndefined ? agency.website : '',
                    mailingAddress: {
                        id      : !agencyUndefined ? agency.mailingAddress.id : uuidv4(),
                        name    :!agencyUndefined ? agency.mailingAddress.name : '',
                        streetAddress1: !agencyUndefined ? agency.mailingAddress.streetAddress1 : '',
                        streetAddress2: !agencyUndefined ? agency.mailingAddress.streetAddress2 : '',
                        city: !agencyUndefined ? agency.mailingAddress.city : '',
                        state: !agencyUndefined ? agency.mailingAddress.state : {value: '', label: ''},
                        zip: !agencyUndefined ? agency.mailingAddress.zip : '',
                    },
                    licenseNumber: !agencyUndefined ? agency.licenseNumber : '',
                    licenseDate: !agencyUndefined ? agency.licenseDate : new Date(),
                    licenseExpirationDate: !agencyUndefined ? agency.licenseExpirationDate : new Date(),
                    appointmentStatus: !agencyUndefined ? agency.appointmentStatus : '',
                    headquarterAgent: !agencyUndefined ? agency.headquarterAgent : '',
                    locationCode: !agencyUndefined ? agency.locationCode : '',
                    commissionType: !agencyUndefined ? agency.commissionType : '',
                    creatorId: !agencyUndefined ? agency.creatorId : USERS[0].id,
                    creatorName: !agencyUndefined ? agency.creatorName : USERS[0].name,
                    created: !agencyUndefined ? agency.created : new Date(),
                    lastModified: !agencyUndefined ? agency.lastModified : new Date(),
                }
        });

    const objectFooterProps : ObjectFooterValues = 
        !agencyUndefined ?
        {
            creatorId       : agency.creatorId,
            creatorName     : agency.creatorName, 
            created         : agency.created, 
            lastModified    : agency.lastModified
        } :
        {   
            creatorId       : uuidv4(),
            creatorName     : "Yankee Zulu",
            created         : new Date(),
            lastModified    : new Date()
        };
    
    const { handleSubmit, control, formState: { errors } } = methods;
    const agencyFormHandler : SubmitHandler<AgencyValues> = (data) => {
        console.log('Agency onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const agencyIndex = AGENCIES.findIndex(agency => agency.id === data.id);
        if (agencyIndex === -1) {
            AGENCIES.push(data);
        } else {
            AGENCIES[agencyIndex] = data;
        }
        navigate('/agencies');
    }


    if (agencyItemProps === undefined) {
        return (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Agency Item Undefined
            </Typography>
        )
    }

    return (
        <FormProvider { ...methods }>
            <Paper variant='outlined' sx={{ p: 2, m: 1, flexGrow: 1 }}>
                <form onSubmit={handleSubmit(agencyFormHandler)} >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field}
                                        id="name" label="Name"
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Controller
                                name="taxId"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field}
                                        id="tax-id" label="Tax Id"
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!errors.taxId}
                                        helperText={errors.taxId?.message}
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
                                        options={AGENCYSTATUSES}
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
                        <Grid item xs={2}>
                            <Controller
                                name="legacyId"
                                control={control}
                                render={({ field }) => (
                                    <TextField {...field}
                                        id="legacy-id" label="Legacy Id"
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!errors.legacyId}
                                        helperText={errors.legacyId?.message}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <ObjectFooter footerValues={objectFooterProps} />
                    <Paper elevation={2} sx={{ p: 2, m: 1, flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
                            Contact Information
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Controller
                                    name="contactName"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="contact-name" label="Contact Name"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.contactName}
                                            helperText={errors.contactName?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="phone" label="Phone"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.phone}
                                            helperText={errors.phone?.message}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Controller
                                    name="principalEmail"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="principal-email" label="Principal Email"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.principalEmail}
                                            helperText={errors.principalEmail?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Controller
                                    name="documentEmail"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="document-email" label="Document Email"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.documentEmail}
                                            helperText={errors.documentEmail?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Controller
                                    name="website"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="website" label="Website"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.website}
                                            helperText={errors.website?.message}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <MailingAddressItem />
                    </Paper>
                    <Paper elevation={2} sx={{ p: 2, m: 1, flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
                            License Information
                        </Typography>                             
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Controller
                                    name="irsName"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="irs-name" label="IRS Name"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.irsName}
                                            helperText={errors.irsName?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="licenseNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="license-number" label="License Number"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.licenseNumber}
                                            helperText={errors.licenseNumber?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Controller
                                        name="licenseDate"
                                        control={control}
                                        render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                                        <DatePicker 
                                            {...field}
                                            inputRef={ref}
                                            label="License Date"
                                            renderInput={(inputProps) => (
                                                <TextField 
                                                    {...inputProps}
                                                    variant="outlined" fullWidth  sx={{ m: 1 }}
                                                    error={!!errors.licenseDate}
                                                    helperText={errors.licenseDate?.message}
                                                />
                                            )}
                                        />
                                    )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Controller 
                                        name="licenseExpirationDate"
                                        control={control}
                                        render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                                            <DatePicker
                                                {...field}
                                                inputRef={ref}
                                                label="License Expiration Date"
                                                renderInput={(inputProps) => (
                                                    <TextField
                                                        {...inputProps}
                                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                                        onBlur={onBlur}
                                                        error={!!errors.licenseExpirationDate}
                                                        helperText={errors.licenseExpirationDate?.message}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="appointmentStatus"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="appointment-status" label="Appointment Status"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.appointmentStatus}
                                            helperText={errors.appointmentStatus?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="agentGrade"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="agent-grade" label="Agent Grade"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.agentGrade}
                                            helperText={errors.agentGrade?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="headquarterAgent"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="headquarter-agent" label="Headquarter Agent"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.headquarterAgent}
                                            helperText={errors.headquarterAgent?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="locationCode"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="location-code" label="Location Code"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.locationCode}
                                            helperText={errors.locationCode?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Controller
                                    name="commissionType"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField {...field}
                                            id="commission-type" label="Commission Type"
                                            variant="outlined" fullWidth  sx={{ m: 1 }}
                                            error={!!errors.commissionType}
                                            helperText={errors.commissionType?.message}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Grid container direction="row" spacing={2} sx={{margin:'auto', justifyContent:"flex-end"}}>
                        <Grid item >
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save</Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to={'/agencies'}
                            >Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}

    
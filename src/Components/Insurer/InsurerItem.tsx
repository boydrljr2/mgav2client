import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Grid, TextField, Autocomplete, Button, Typography } from '@mui/material';

import { USPSSTATEABBREVIATIONS,
    USERS,
    InsurerItemValues, InsurerSchema, INSURERS, INSURERSTATUSES, InsurerValues, InsurerProductTableValues,  
    } from '../Scaffold/MGAValues';

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import InsurerDetails from './InsurerDetails';
import InsurerProductTable from '../Product/InsurerProductTable';


export default function InsurerItem (insurerItemProps : InsurerItemValues) {

    const navigate = useNavigate();

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);
    const newInsurerId = uuidv4();

    const methods =
        useForm<InsurerValues>({
            resolver: yupResolver(InsurerSchema),
            defaultValues:    
                {
                    id          : (!insurerUndefined) ? insurer.id : newInsurerId,
                    FEIN        : (!insurerUndefined) ? insurer.FEIN : '',
                    legacyId        : (!insurerUndefined) ? insurer.legacyId : '',
                    status          : (!insurerUndefined) ? insurer.status : INSURERSTATUSES[2],
                    name            : (!insurerUndefined) ? insurer.name : '',
                    domicileState   : (!insurerUndefined) ? insurer.domicileState : USPSSTATEABBREVIATIONS[0],
                    maxPolicyTerm   : (!insurerUndefined) ? insurer.maxPolicyTerm : 0,
                    minPolicyTerm   : (!insurerUndefined) ? insurer.minPolicyTerm : 0,
                    renewalDaysAgent: (!insurerUndefined) ? insurer.renewalDaysAgent : 0,
                    renewalDaysDirectBill : (!insurerUndefined) ? insurer.renewalDaysDirectBill : 0,
                    contactName     : (!insurerUndefined) ? insurer.contactName : '',
                    phone           : (!insurerUndefined) ? insurer.phone : '',
                    principalEmail  : (!insurerUndefined) ? insurer.principalEmail : '',
                    website         : (!insurerUndefined) ? insurer.website : '',
                    mailingAddress  : {
                        id              : (!insurerUndefined) ? insurer.mailingAddress.id : uuidv4(),
                        name            : (!insurerUndefined) ? insurer.mailingAddress.name : '',
                        streetAddress1  : (!insurerUndefined) ? insurer.mailingAddress.streetAddress1 : '',
                        streetAddress2  : (!insurerUndefined) ? insurer.mailingAddress.streetAddress2 : '',
                        city            : (!insurerUndefined) ? insurer.mailingAddress.city : '',
                        state           : (!insurerUndefined) ? insurer.mailingAddress.state : USPSSTATEABBREVIATIONS[0],
                        zip             : (!insurerUndefined) ? insurer.mailingAddress.zip : '',
                    },
                    NAICGroup               : (!insurerUndefined) ? insurer.NAICGroup : '',
                    NAICCode                : (!insurerUndefined) ? insurer.NAICCode : '',
                    NAICGroupName           : (!insurerUndefined) ? insurer.NAICGroupName : '',
                    AMBestID                : (!insurerUndefined) ? insurer.AMBestID : '',
                    AMBestRating            : (!insurerUndefined) ? insurer.AMBestRating : '',
                    statementType           : (!insurerUndefined) ? insurer.statementType : '',
                    creatorId               : (!insurerUndefined) ? insurer.creatorId : USERS[0].id,
                    creatorName             : (!insurerUndefined) ? insurer.creatorName : USERS[0].name,
                    created                 : (!insurerUndefined) ? insurer.created : new Date(),
                    lastModified            : (!insurerUndefined) ? insurer.lastModified : new Date(),
                }
        });

    const footerProps : ObjectFooterValues = !insurerUndefined ?
    {
        creatorId       : insurer.creatorId,
        creatorName     : insurer.creatorName, 
        created         : insurer.created, 
        lastModified    : insurer.lastModified
    } :
    {   
        creatorId       : uuidv4(),
        creatorName     : "Yankee Zulu",
        created         : new Date(),
        lastModified    : new Date()
    }

    const insurerProductTableProps : InsurerProductTableValues = { 
        insurerId : (!insurerUndefined) ? insurer.id : newInsurerId
    };

    const { control,handleSubmit, watch, formState, 
        formState: { errors, dirtyFields, isDirty, isValid, touchedFields} } 
        = methods;


    const insurerFormHandler : SubmitHandler<InsurerValues> = (data) => {
        console.log('onSubmit data: ', data);
        methods.setValue('lastModified', new Date());
        const insurerIndex = INSURERS.findIndex(insurer => insurer.id === data.id);
        if (insurerIndex === -1) {
            INSURERS.push(data);
        } else {
            INSURERS[insurerIndex] = data;
        }
        navigate('/insurers');

    }

    //This early return has to be called after all the useState calls otherwise React crashes
    if (insurerItemProps === undefined) {
        return (
            <Typography>
                Insurer Item Undefined 
            </Typography>
        )
    }

    return (
        <FormProvider {...methods} >
            <Paper sx={{padding: 2}}>
                <form onSubmit={handleSubmit(insurerFormHandler)} > 
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="name" label="Name"
                                        variant="outlined" sx={{m:1}} fullWidth
                                        error={!!errors.name}
                                        helperText={errors.name?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={2} >
                            <Controller
                                name="FEIN"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="FEIN" label="FEIN"
                                        variant="outlined" sx={{m:1}} fullWidth
                                        error={!!errors.FEIN}
                                        helperText={errors.FEIN?.message}
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
                                        options={INSURERSTATUSES}
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
                                name="domicileState"
                                control={control}
                                render={({field}) => (
                                    <Autocomplete {...field}
                                        id="domicileState"
                                        options={USPSSTATEABBREVIATIONS}
                                        getOptionLabel={(option) => option.label}
                                        isOptionEqualToValue={(option, value) => option.value === value.value}
                                        onChange={( event, newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        renderInput={(field) =>
                                            <TextField
                                                {...field}
                                                label="Domicile State"
                                                variant="outlined" sx={{margin:1}} fullWidth
                                                error={!!errors.domicileState}
                                                helperText={!!errors.domicileState ? errors.domicileState.message:''}
                                            />}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <ObjectFooter footerValues={footerProps} />
                    <InsurerDetails />
                    <InsurerProductTable insurerProductTableProps={insurerProductTableProps} />
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
                                component={Link} to={'/insurers'}
                            >Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </FormProvider>
    )
}
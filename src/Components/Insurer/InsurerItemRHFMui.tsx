import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useForm, useFormContext, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { 
    MailingAddressValues, MailingAddressItemValues, MailingAddressSchema,
    USPSSTATEABBREVIATIONS,
    InsurerItemValues, newInsurer, InsurerSchema, INSURERS, INSURERSTATUSES,
    initialInsurerFormErrors, initialInsurerFormTouches, initialInsurerFormValid, InsurerValues  
    } from '../Scaffold/MGAValues';

import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import MailingAddressItem from '../MailingAddress/MailingAddressItemRHFMui';


export default function InsurerItem (insurerItemProps : InsurerItemValues) {

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);

    const methods =
        useForm<InsurerItemValues>({
            resolver: yupResolver(InsurerSchema),
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

    const insurerFormHandler : SubmitHandler<InsurerItemValues> = (data) => {
        console.log('onSubmit data: ', data);    
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
            <Paper variant="outlined" sx={{padding: 2}}>
                <form onSubmit={methods.handleSubmit(insurerFormHandler)} > 

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
                                component={Link} to='/insurers'
                            >Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
                <pre>formState:  {JSON.stringify(methods.formState, null, 2)}</pre>
            </Paper>
        </FormProvider>
    )
}

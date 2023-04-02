import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useForm, useFormContext, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';

import { MailingAddressValues, MailingAddressItemValues, MailingAddressSchema } from '../Scaffold/MGAValues';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

export default function MailingAddressItem() {

    const methods = 
        useForm<MailingAddressValues>({
            resolver: yupResolver(MailingAddressSchema),
            defaultValues: {
                streetAddress: '',
                city: '',
                zip: '',
            }}
    );

    const mailingAddressFormHandler : SubmitHandler<MailingAddressValues> = (data) => {
        console.log('onSubmit data: ', data);
    };

    //'watch' triggers a re-render when the values of the watched fields change.
    //'watch()' with blank paramters rerenders on every change to any registered field.
    //watch('streetName');

    //This is a way to pass a callback function to watch() that will be called when the watched fields change.
    //Which is the same as the 'watch' above EXCEPT that render is not triggered.
    /*
    React.useEffect(() => {
        const subscription = watch((data) => {
            console.log("useEffect data: ", data);
        })
        return () => { subscription.unsubscribe()}
    }, [watch, errors, isDirty, dirtyFields]);
    */

    //This method destructuring belongs in each subcomponent that needs access to the formState.
    const { formState: {errors, dirtyFields, isDirty, isValid, touchedFields} } = methods;
    console.log('errors: ', errors);
    console.log('watch: ', methods.watch());

    return (
        <React.Fragment>
            <FormProvider  {...methods}>
                <form onSubmit={methods.handleSubmit(mailingAddressFormHandler)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Controller 
                                name="streetAddress"
                                control={methods.control} 
                                render={({field}) => (
                                    <MGATextField {...field} 
                                        id="streetAddress" label="Street"
                                        error={!!errors.streetAddress}
                                        helperText={errors.streetAddress?.message}
                                    />
                                )} 
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Controller
                                name="city"
                                control={methods.control}
                                render={({field}) => (
                                    <MGATextField {...field}
                                        id="city" label="City"
                                        error={!!errors.city}
                                        helperText={errors.city?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controller 
                                name="zip"
                                control={methods.control}
                                render={({field}) => (
                                    <MGATextField {...field}
                                        id="zip" label="Zip"
                                        error={!!errors.zip}
                                        helperText={errors.zip?.message}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>

            <pre>formState: {JSON.stringify(methods.formState, null, 2)}</pre>
            <pre>errors: {JSON.stringify(errors , null, 2)}</pre>
            <pre>touched fields: {JSON.stringify(touchedFields, null, 2)} </pre>
            <pre>dirtyFields: {JSON.stringify(dirtyFields, null, 2)}</pre>
            <pre>isDirty: {JSON.stringify(isDirty, null, 2)}</pre>
            <pre>isValid: {JSON.stringify(isValid, null, 2)}</pre>

        </React.Fragment>
    );
}
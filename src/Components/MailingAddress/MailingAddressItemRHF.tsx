import React from 'react';

import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@mui/material';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

interface MailingAddress {
    streetNumber?: string;
    streetName:  string;
    city: string;
    state: string;
    zip: string;
}

const MailingAddressSchema = yup.object().shape({
    streetNumber: yup.string(),
    streetName: yup.string().required('Street Required').min(4, 'Street Minimum length is 4'),
    city: yup.string().required('City Required'),
    state: yup.string(),
    zip: yup.string(),
});

export default function MailingAddressItem() {

    const methods = 
        useForm<MailingAddress>({
            resolver: yupResolver(MailingAddressSchema),
            defaultValues: {
                streetNumber: '',
                streetName: '',
                city: '',
                state: '',
                zip: '',
            }}
    );

    const mailingAddressFormHandler : SubmitHandler<MailingAddress> = (data) => {
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
                    <Controller 
                        name="streetNumber"
                        control={methods.control} 
                        render={({field}) => (
                            <MGATextField {...field} 
                                id="street-number" label="Street Number"
                                error={!!errors.streetNumber}
                                helperText={errors.streetNumber?.message}
                            />
                        )} 
                        />
                    <Controller
                        name="streetName"
                        control={methods.control}
                        render={({field}) => (
                            <MGATextField {...field}
                                id="street-name" label="Street Name"
                                error={!!errors.streetName}
                                helperText={errors.streetName?.message}
                            />
                        )}
                    />
                    <Controller
                        name="city"
                        control={methods.control}
                        render={({field}) => (
                            <MGATextField {...field}
                                id="city" label="City"
                                helperText={errors.city?.message}
                            />
                        )}
                    />
                    <input 
                        type="submit" 
                        //Disabling the submit button if the form !isValid seems like a good idea at first.
                        //But, how does the User know what to do to make the form valid?
                        //Errors don't appear until the submit button is clicked.
                        //disabled={!isValid}
                    />
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
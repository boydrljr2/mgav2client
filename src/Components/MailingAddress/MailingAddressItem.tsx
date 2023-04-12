import React from 'react';

import { useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid, TextField, Autocomplete, Typography } from '@mui/material';
//import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { USPSSTATEABBREVIATIONS } from '../Scaffold/MGAValues';

export default function MailingAddressItem() {

    const { control, 
            formState: { errors} } 
        = useFormContext();


    return (
        <React.Fragment>
            <Typography variant='h6' sx={{color: 'primary.main', p:1, m:1}} >Mailing Address</Typography> 
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Controller 
                        name="mailingAddress.streetAddress1"
                        control={control} 
                        render={({field}) => (
                            <TextField
                                {...field} 
                                id="mailingAddress.streetAddress" label="Street"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'mailingAddress.streetAddress1', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'mailingAddress.streetAddress1.message', '')}
                            />
                        )} 
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Controller 
                        name="mailingAddress.streetAddress2"
                        control={control} 
                        render={({field}) => (
                            <TextField
                                {...field} 
                                id="mailingAddress.streetAddress" label="Street"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'mailingAddress.streetAddress2', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'mailingAddress.streetAddress2.message', '')}
                            />
                        )} 
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller
                        name="mailingAddress.city"
                        control={control}
                        render={({field}) => (
                            <TextField 
                                {...field}
                                id="city" label="City"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'mailingAddress.city', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'mailingAddress.city.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                        <Controller 
                            name="mailingAddress.state"
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
                                            error={!!_.get(errors, 'mailingAddress.state', null)}
                                            //Fix this helperText method so that it takes
                                            //the error message from the schema without crashing
                                            //if the state value is null.
                                            helperText={
                                                (!!_.get(errors, 'mailingAddress.state', null)
                                                ? "Please select a state" 
                                                : '')}
                                        />}
                                />
                            )}
                        />
                    </Grid>
                <Grid item xs={6} md={3}>
                    <Controller 
                        name="mailingAddress.zip"
                        control={control}
                        render={({field}) => (
                            <TextField {...field}
                                id="zip" label="Zip"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'mailingAddress.zip', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'mailingAddress.zip.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
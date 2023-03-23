import React from 'react';

import {Grid} from '@mui/material';

import MGATextField from '../Scaffold/FieldParts/MGATextField';


export default function MailingAddressItem () {

    return (
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <MGATextField
                        id="streetAddress" name="streetAddress" label="Street"
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <MGATextField
                            id="city" name="city" label="City"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <MGATextField
                            id="state" name="state" label="State"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <MGATextField
                            id="zip" name="zip" label="Zip"
                        />
                    </Grid>
                </Grid>
    )
}

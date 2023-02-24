import React from 'react';

import {Box, Stack, Grid} from '@mui/material';

import { MailingAddressValues } from '../Scaffold/MGAValues';
import MGATextField from '../Scaffold/FieldParts/MGATextField';


export default function MailingAddressView(props: {mailingAddress: MailingAddressValues}) {
    
    const mailingAddress = props.mailingAddress;

    return (
        <React.Fragment>
            <Box sx={{margin:2}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} >
                        <MGATextField
                        id="streetAddress" name="streetAddress" label="Street"
                        value={mailingAddress.streetAddress}
                        inputProps={{readOnly: true}}
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <MGATextField
                            id="city" name="city" label="City"
                            value={mailingAddress.city}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <MGATextField
                            id="state" name="state" label="State"
                            value={mailingAddress.state}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <MGATextField
                            id="zip" name="zip" label="Zip"
                            value={mailingAddress.zip}
                            inputProps={{readOnly: true}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

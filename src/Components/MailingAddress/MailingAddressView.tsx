import React from 'react';

import {Box, Stack} from '@mui/material';

import MailingAddressValues from './MailingAddressValues';
import MGATextField from '../../Scaffold/FieldParts/MGATextField';


export default function MailingAddressView(props: {mailingAddress: MailingAddressValues | undefined}) {

    const streetAddress = (mailingAddress: MailingAddressValues | undefined) => {
        if (mailingAddress === undefined) {
            return "";
        } else {
            return mailingAddress.streetAddress;
        }
    }

    const city = (mailingAddress: MailingAddressValues | undefined) => {
        if (mailingAddress === undefined) {
            return "";
        } else {
            return mailingAddress.city;
        }
    }

    const state = (mailingAddress: MailingAddressValues | undefined) => {
        if (mailingAddress === undefined) {
            return "";
        } else {
            return mailingAddress.state;
        }
    }

    const zip = (mailingAddress: MailingAddressValues | undefined) => {
        if (mailingAddress === undefined) {
            return "";
        } else {
            return mailingAddress.zip;
        }
    }


    return (
        <React.Fragment>
            <Stack>
                <MGATextField
                    id="streetAddress" name="streetAddress" label="Street"
                    value={streetAddress}
                />
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        margin:1
                    }}
                >
                    <MGATextField
                        id="city" name="city" label="City"
                        value={city}
                    />
                    <MGATextField
                        id="state" name="state" label="State"
                        value={state}
                    />
                    <MGATextField
                        id="zip"
                        name="zip"
                        label="Zip"
                        value={zip}
                    />
                </Box>
            </Stack>
        </React.Fragment>
    )
}

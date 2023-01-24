import React from 'react';

import { Paper, TextField, FormControl, FormGroup, Stack, Button, Dialog, Alert, AlertTitle, Autocomplete } from '@mui/material';

import MailingAddressValues from './MailingAddressValues';
import { USPSState, USPSStateAbbreviations } from "../../Scaffold/FieldParts/USPSStates";
import { USPSZipCode } from "../../Scaffold/FieldParts/USPSZip";
import MGATextField, { MGATextFieldStyle, MGATextFieldStyle400 } from '../../Scaffold/FieldParts/MGATextField';


export default function MailingAddressView(props) {

    console.log("MailingAddressView props: ", props);

    return (
        <React.Fragment>
            <Stack>
                <MGATextField
                    id="streetAddress" 
                    name="streetAddress"
                    label="Street"
                    sx={MGATextFieldStyle400}
                    value={props.mailingAddress.streetAddress}
                />
                <FormGroup row>
                    <MGATextField
                        id="city" 
                        name="city"
                        label="City"
                        sx={MGATextFieldStyle}
                        value={props.mailingAddress.city}
                    />
                    <USPSState
                        stateAbbrev={props.mailingAddress.state}
                        id="state" 
                        name="state"
                        label="State"
                        //value={props.mailingAddress.state}
                    />
                    <USPSZipCode
                        zipCode={props.mailingAddress.zip}
                        id="zip"
                        name="zip"
                        label="Zip"
                        //value={props.mailingAddress.zip}
                    />
                </FormGroup>
            </Stack>
        </React.Fragment>
    )
}

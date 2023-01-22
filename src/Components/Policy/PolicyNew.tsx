import React from 'react';

import { Paper, FormControl, FormGroup, TextField } from '@mui/material';

import PageBar from '../../Scaffold/PageParts/PageBar';
import MailingAddressForm from '../MailingAddress/MailingAddressForm';

export default function PolicyNew() {

    const pageButtons = [{}]

    return (
        <div>
            <PageBar title="New Policy" pageButtons={pageButtons}/>
            <Paper>
                <form>
                    <FormControl>
                        <FormGroup>
                            <TextField id="policyName" name="policyName" label="Policy Name" />
                            <TextField id="policyNumber" name="policyNumber" label="Policy Number" />
                            <TextField id="policyType" name="policyType" label="Policy Type" />
                            <TextField id="policyStartDate" name="policyStartDate" label="Policy Start Date" />  
                            <TextField id="policyEndDate" name="policyEndDate" label="Policy End Date" />
                            <FormGroup>
                                <TextField id="insurerName" name="insurerName" label="Insurer Name" />
                                <MailingAddressForm />
                            </FormGroup>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}
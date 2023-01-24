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
                        <FormGroup row>
                            <TextField id="policyNumber" name="policyNumber" label="Policy Number" />
                            <TextField id="policyProduct" name="policyProduct" label="Product" />
                            <TextField id="insuranceType" name="insuranceType" label="Insurance Type" />
                            <TextField id="policyStartDate" name="policyStartDate" label="Policy Start Date" />  
                            <TextField id="policyEndDate" name="policyEndDate" label="Policy End Date" />
                        </FormGroup>
                        <FormGroup>
                            <TextField id="insurerName" name="insurerName" label="Insurer Name" />
                        </FormGroup>
                        <FormGroup>
                            <TextField id="agencyName" name="agencyName" label="Agency Name" />
                            <TextField id="agencyPhone" name="agencyPhone" label="Agency Phone" />
                        </FormGroup>
                        <FormGroup>
                            <TextField id="insuredName" name="insuredName" label="Insured Name" />
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}
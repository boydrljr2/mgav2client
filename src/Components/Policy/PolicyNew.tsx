import React from 'react';

import { Paper, FormControl, FormGroup, TextField } from '@mui/material';

import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../../Scaffold/PageParts/PageValues';
import MailingAddressForm from '../MailingAddress/MailingAddressForm';

export default function PolicyNew() {

    const pageButtons : PageButtonValues[] = [{name:'Save', link: '/policies'}]
    const pageBarProps : PageBarValues ={
        title: "Add Policy",
        pageButtons: pageButtons
    }

    return (
        <div>
            <PageBar {...pageBarProps}/>
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
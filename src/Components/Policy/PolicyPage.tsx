import React from 'react';

import { POLICIES, PolicyRowValues } from '../Scaffold/MGAValues';
import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import PolicyTable from "./PolicyTable";

export default function PolicyPage() {

    //create pageButtons and pageBarProps for PageBar
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'policies/new'}
    ]
    const pageBarProps : PageBarValues = {
        title: "Policies",
        pageButtons: pageButtons
    }

    //select and transform rows from POLICIES into policyRows as rows for PolicyTable
    const policyRows : PolicyRowValues[] = POLICIES.map(policy => {
        return {
            id                      : policy.id,
            policyNumber            : policy.policyNumber,
            status                  : policy.status,
            //set periodStartDate to policy.periodStartDate in MM/DD/YYYY format
            periodStartDate         : policy.periodStartDate.toLocaleString().split(',')[0],
            periodEndDate           : policy.periodEndDate.toLocaleString().split(',')[0],
            insuredName             : policy.insured.name,
            insuredAddress          : !!policy.insured.mailingAddress ?
                                        policy.insured.mailingAddress.streetAddress1 + ' ' +
                                        policy.insured.mailingAddress.streetAddress2 + ' ' +
                                        policy.insured.mailingAddress.city + ' ' +
                                        policy.insured.mailingAddress.state.value + ' ' +
                                        policy.insured.mailingAddress.zip : '',
            insuredPhone            : !!policy.insured.phone ? policy.insured.phone : '',
            insuredEmail            : !!policy.insured.email ? policy.insured.email : '',
            agencyName              : policy.agency.name,
            agencyAddress           : !!policy.agency.mailingAddress ?
                                        policy.agency.mailingAddress.streetAddress1 + ' ' +
                                        policy.agency.mailingAddress.streetAddress2 + ' ' +
                                        policy.agency.mailingAddress.city + ' ' +
                                        policy.agency.mailingAddress.state.value + ' ' +
                                        policy.agency.mailingAddress.zip : '',
            agencyPhone             : !!policy.agency.phone ? policy.agency.phone : '',
            agencyEmail             : !!policy.agency.principalEmail ? policy.agency.principalEmail : '',
            insurerName             : policy.product.insurer.name,
            insurerAddress         : !!policy.product.insurer.mailingAddress ?
                                        policy.product.insurer.mailingAddress.streetAddress1 + ' ' +
                                        policy.product.insurer.mailingAddress.streetAddress2 + ' ' +
                                        policy.product.insurer.mailingAddress.city + ' ' +
                                        policy.product.insurer.mailingAddress.state.value + ' ' +
                                        policy.product.insurer.mailingAddress.zip : '',
            insurerPhone            : !!policy.product.insurer.phone ? policy.product.insurer.phone : '',
            insurerEmail            : !!policy.product.insurer.principalEmail ? policy.product.insurer.principalEmail : '',
            productName             : policy.product.name,
        }
    })

    console.log("PolicyPage policyRows: ", policyRows)
    
    const policyTableProps = {
        policyRows: policyRows
    }

    return (
        <div>
            <PageBar {...pageBarProps}/>
            <PolicyTable {...policyTableProps} />
        </div>
    )
}
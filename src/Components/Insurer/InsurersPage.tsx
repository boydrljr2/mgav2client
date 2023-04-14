import React from 'react';

import { INSURERS, InsurerRowValues } from '../Scaffold/MGAValues';
import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';
import InsurerTable from './InsurerTable';


export default function InsurerPage() {
    
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'insurers/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Insurers",
        pageButtons: pageButtons
    }

    const insurerRows : InsurerRowValues[] = INSURERS.map(insurer => {
        return {
            //Identifiers
            id                      : insurer.id,
            name                    : !!insurer.name ? insurer.name : '',
            FEIN                    : !!insurer.FEIN ? insurer.FEIN : '',
            legacyId                : !!insurer.legacyId ? insurer.legacyId : '',
            status                  : !!insurer.status.value ? insurer.status.value : '',
            domicileState           : insurer.domicileState.value ? insurer.domicileState.value : '',
            //Policy Terms
            maxPolicyTerm           : insurer.maxPolicyTerm,
            minPolicyTerm           : insurer.minPolicyTerm,
            renewalDaysAgent        : !!insurer.renewalDaysAgent ? insurer.renewalDaysAgent : 0,
            renewalDaysDirectBill   : !!insurer.renewalDaysDirectBill ? insurer.renewalDaysDirectBill : 0,
            statementType           : !!insurer.statementType ? insurer.statementType : '',
            //Contact Info
            contactName             : !!insurer.contactName ? insurer.contactName : '',
            phone                   : !!insurer.phone ? insurer.phone : '',
            principalEmail          : !!insurer.principalEmail ? insurer.principalEmail : '',
            website                 : !!insurer.website ? insurer.website : '',
            mailingAddress          : insurer.mailingAddress.streetAddress1 + ' ' +
                                        insurer.mailingAddress.streetAddress2 + ' ' +
                                        insurer.mailingAddress.city + ' ' +
                                        insurer.mailingAddress.state.value + ' ' +
                                        insurer.mailingAddress.zip,
            //Rating Info
            NAICGroup               : !!insurer.NAICGroup ? insurer.NAICGroup : '',
            NAICCode                : !!insurer.NAICCode ? insurer.NAICCode : '',
            NAICGroupName           : !!insurer.NAICGroupName ? insurer.NAICGroupName : '',
            AMBestID                : !!insurer.AMBestID ? insurer.AMBestID : '',
            AMBestRating            : !!insurer.AMBestRating ? insurer.AMBestRating : ''
        }
    });

    const insurerTableProps = {
        insurerRows: insurerRows
    }
    
    return (
        <div>
            <PageBar {...pageBarProps}/>
            <InsurerTable {...insurerTableProps} />
        </div>
    )
}
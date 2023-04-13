import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';
import { AGENCIES, AgencyRowValues } from '../Scaffold/MGAValues';

import AgencyTable from './AgencyTable';

export default function AgencyPage() {

    //Select and transform rows from AGENCIES into agencyRows as rows for AgencyTable
    const agencyRows : AgencyRowValues[] = 
        AGENCIES.map(agency => {
            return {
                id                      : agency.id,
                legacyId                : !!agency.legacyId ? agency.legacyId : '',
                name                    : agency.name,
                taxId                   : agency.taxId,
                licenseNumber           : agency.licenseNumber,
                licenseDate             : agency.licenseDate.toString(),
                licenseExpirationDate   : !!agency.licenseExpirationDate ? 
                                                agency.licenseExpirationDate.toString() : '',
                status                  : agency.status.value,
                contactName             : !!agency.contactName ? agency.contactName : '',
                phone                   : !!agency.phone ? agency.phone : '',
                principalEmail          : !!agency.principalEmail ? agency.principalEmail : '',
                website                 : !!agency.website ? agency.website : '',
                mailingAddress          : agency.mailingAddress.streetAddress1 + ' ' + 
                                            agency.mailingAddress.streetAddress2 + ' ' + 
                                            agency.mailingAddress.city + ' ' + 
                                            agency.mailingAddress.state.value + ' ' + 
                                            agency.mailingAddress.zip,
        }
    });

    const agencyTableProps = {
        agencyRows: agencyRows
    }

    //create pageButtons and pageBarProps for PageBar
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'agencies/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Agencies",
        pageButtons: pageButtons
    }

    return (
        <div>
            <PageBar {...pageBarProps} />
            <AgencyTable   {...agencyTableProps}/>
        </div>
    )
}
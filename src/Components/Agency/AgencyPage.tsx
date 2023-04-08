import React from 'react';

import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import PageBar from '../Scaffold/PageParts/PageBar';
import { AGENCIES, AgencyRowValues } from '../Scaffold/MGAValues';

import AgencyTable from './AgencyTableEnhanced';

export default function AgencyPage() {

    //write a function to convert agency.mailingAddress to a string
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
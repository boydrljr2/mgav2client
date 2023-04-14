import React from 'react';

import { AGENCIES, AgencyRowValues } from '../Scaffold/MGAValues';
import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';
import AgencyTable from './AgencyTable';

export default function AgencyPage() {

    //create pageButtons and pageBarProps for PageBar
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'agencies/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Agencies",
        pageButtons: pageButtons
    }

    //Select and transform rows from AGENCIES into agencyRows as rows for AgencyTable
    const agencyRows : AgencyRowValues[] = AGENCIES.map(agency => {
            return {
                //Identifiers
                id                      : agency.id,
                legacyId                : !!agency.legacyId ? agency.legacyId : '',
                name                    : agency.name,
                irsName                 : !!agency.irsName ? agency.irsName : '',
                taxId                   : agency.taxId,
                status                  : agency.status.value,
                //Contact Info
                contactName             : !!agency.contactName ? agency.contactName : '',
                phone                   : !!agency.phone ? agency.phone : '',
                principalEmail          : !!agency.principalEmail ? agency.principalEmail : '',
                documentEmail           : !!agency.documentEmail ? agency.documentEmail : '',
                website                 : !!agency.website ? agency.website : '',
                mailingAddress          : agency.mailingAddress.streetAddress1 + ' ' + 
                                            agency.mailingAddress.streetAddress2 + ' ' + 
                                            agency.mailingAddress.city + ' ' + 
                                            agency.mailingAddress.state.value + ' ' + 
                                            agency.mailingAddress.zip,
                //License Info                
                licenseNumber           : agency.licenseNumber,
                licenseDate             : !!agency.licenseDate ? agency.licenseDate.toLocaleString() : '',
                licenseExpirationDate   : !!agency.licenseExpirationDate ? 
                                            agency.licenseExpirationDate.toLocaleString() : '',
                appointmentStatus       : !!agency.appointmentStatus ? agency.appointmentStatus : '',
                agentGrade              : !!agency.agentGrade ? agency.agentGrade : '',
                headquarterAgent        : !!agency.headquarterAgent ? agency.headquarterAgent : '',
                locationCode            : !!agency.locationCode ? agency.locationCode : '',
                commissionType          : !!agency.commissionType ? agency.commissionType : '',
        }
    });

    const agencyTableProps = {
        agencyRows: agencyRows
    }

    return (
        <div>
            <PageBar {...pageBarProps} />
            <AgencyTable   {...agencyTableProps}/>
        </div>
    )
}
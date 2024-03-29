import React from 'react';
import { useParams } from 'react-router-dom';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { AGENCIES, AgencyValues, newAgency, AgencyItemValues } from '../Scaffold/MGAValues';
import AgencyItem from './AgencyItem';

export default function AgencyEdit () {

    const agencyId = useParams().agencyId;

    let selectedAgency : AgencyValues | undefined  = 
        AGENCIES.find(agency => String(agency.id) === agencyId);
        
    const selectedAgencyUndefined = (selectedAgency === undefined);
    
    selectedAgency = !selectedAgencyUndefined ? selectedAgency : newAgency;

    const agencyItemProps : AgencyItemValues =  { agency : selectedAgency };


    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'agencies/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Agency: " + selectedAgency?.name,
        pageButtons: pageButtons
    }


    return (
        <React.Fragment>        
            <PageBar {...pageBarProps}/>
            <AgencyItem {...agencyItemProps} />
        </React.Fragment>
    )
}
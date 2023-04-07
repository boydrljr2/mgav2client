import React from 'react';

import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import PageBar from '../Scaffold/PageParts/PageBar';
import { AGENCIES } from '../Scaffold/MGAValues';

import AgencyTable from './AgencyTableEnhanced';

export default function AgencyPage() {

    const agencies = AGENCIES;

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
            <AgencyTable agencies={agencies} />
        </div>
    )
}
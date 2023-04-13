import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { AgencyItemValues, newAgency } from '../Scaffold/MGAValues';
import AgencyItem from './AgencyItem';

export default function AgencyNew() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "New Agency",
        pageButtons: pageButtons
    }

    const agencyItemProps : AgencyItemValues = {
        agency: newAgency
    };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps}/>
            <AgencyItem {...agencyItemProps} />
        </React.Fragment>
    )
}
import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import InsurerTable from './InsurerTable';
import { INSURERS } from '../Scaffold/MGAValues';

export default function InsurerPage() {
    
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'insurers/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Insurers",
        pageButtons: pageButtons
    }
    
    return (
        <div>
            <PageBar {...pageBarProps}/>
            <InsurerTable insurers={INSURERS} />
        </div>
    )
}
import React from 'react';

import InsurerTable from './InsurerTable';
import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

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
            <InsurerTable />
        </div>
    )
}
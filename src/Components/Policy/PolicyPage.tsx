import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import PolicyTable from "./PolicyTable";

export default function PolicyPage() {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'policies/new'}
    ]
    const pageBarProps : PageBarValues = {
        title: "Policies",
        pageButtons: pageButtons
    }

    return (
        <div>
            <PageBar {...pageBarProps}/>
            <PolicyTable />
        </div>
    )
}
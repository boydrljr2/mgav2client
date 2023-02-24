import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import InsurerAdd from './InsurerAdd';

export default function InsurerNew() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "Add Insurer",
        pageButtons: pageButtons
    }

    return (
        <React.Fragment>
            <PageBar {...pageBarProps}/>
            <InsurerAdd />
        </React.Fragment>
    )
}
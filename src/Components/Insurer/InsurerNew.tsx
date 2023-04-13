import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { InsurerItemValues, newInsurer } from '../Scaffold/MGAValues';
import InsurerItem from './InsurerItem';

export default function InsurerNew() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "New Insurer",
        pageButtons: pageButtons
    }

    const insurerItemProps : InsurerItemValues = {
        insurer: newInsurer
    };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps}/>
            <InsurerItem {...insurerItemProps} />
        </React.Fragment>
    )
}
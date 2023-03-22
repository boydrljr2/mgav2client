import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { InsurerItemValues, newInsurer } from './InsurerValues';
import InsurerItem from './InsurerItemMuiOnly';

export default function InsurerNew() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "Add Insurer",
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
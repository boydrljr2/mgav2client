import React from 'react';

import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../../Scaffold/PageParts/PageValues';

export default function InsurerNew() {

    const pageButtons : PageButtonValues[] = [{ name: 'none', link: '' }];

    const pageBarProps : PageBarValues = {
        title: "Add Insurer",
        pageButtons: pageButtons
    }

    return (
        <div>
            <PageBar {...pageBarProps}/>
        </div>
    )
}
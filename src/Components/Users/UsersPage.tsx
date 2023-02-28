import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import UsersTable from './UsersTable';

export default function UserPage() {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'users/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Users",
        pageButtons: pageButtons
    }

    return (
        <>
            <PageBar {...pageBarProps} />
            <UsersTable />
        </>
    )
}
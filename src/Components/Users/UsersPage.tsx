import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import UsersTable from './UsersTable';

const usersButtons = [
    {name: 'New', link: 'register'}
]

export default function UserPage(props: any) {
    return (
        <>
            <PageBar title='Users' pageButtons={usersButtons} />
            <UsersTable />
        </>
    )
}
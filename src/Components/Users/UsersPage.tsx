import React from 'react';

import PageBar, { PageButtonValues, PageBarValues } from '../Scaffold/PageParts/PageBar';

import UsersTable from './UsersTable';
import {USERS, UserTableRowValues, UserTableProps} from '../Scaffold/MGAValues';

export default function UserPage() {


    //Select and transform rows from AGENCIES into agencyRows as rows for AgencyTable
    const userRows : UserTableRowValues[] = 
        USERS.map(user => {
            return {
                id                      : user.id,
                name                    : user.name,
                email                   : user.email,
                roleValue               : user.role.value,
                image                   : user.image
        }
    });

    const userTableProps = {
        userRows: userRows
    }
    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'users/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Users",
        pageButtons: pageButtons,
    }

    return (
        <>
            <PageBar {...pageBarProps} />            
            <UsersTable {...userTableProps} />
        </>
    )
}
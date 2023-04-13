import React from 'react';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

import { UserItemValues, newUser } from '../Scaffold/MGAValues';
import UserItem from './UserItem';

export default function UserNew () {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title       : "New User",
        pageButtons : pageButtons
    }
    
    const userItemProps : UserItemValues = { user : newUser };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <UserItem {...userItemProps } />
        </React.Fragment>
    )
}


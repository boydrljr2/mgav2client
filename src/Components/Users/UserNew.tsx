import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { UserItemValues, newUser } from '../Scaffold/MGAValues';
import UserItem from './UserItemMuiOnly';

export default function UserNew () {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title       : "New User",
        pageButtons : pageButtons
    }
    
    const userItemProps : UserItemValues = {
        user : newUser
    };

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <UserItem {...userItemProps } />
        </React.Fragment>
    )
}


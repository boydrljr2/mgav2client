import React from 'react';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { UserItemValues, USERS, ROLES } from './UserValues';
import UserItem from './UserItem';

export default function UserNew () {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title       : "New User",
        pageButtons : pageButtons
    }

    const newId = USERS.length + 1;

    const newUser = {
        id          : newId,
        name        : '',
        email       : '',
        password    : '',
        image       : '',
        role        : ROLES[0],
        creatorId   : 1,
        creatorName : 'Able Baker',
        created     : new Date(),
        lastModified: new Date()
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


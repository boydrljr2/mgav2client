import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { UserItemValues, ROLES } from './UserValues';
import UserItem from './UserItemMuiOnly';

export default function UserNew () {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title       : "New User",
        pageButtons : pageButtons
    }

    const newUser = {
        id          : uuidv4(),
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


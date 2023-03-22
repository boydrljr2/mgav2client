import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';

import { USERS, ROLES, UserValues, newUser, UserItemValues } from './UserValues';
import UserItem from './UserItemMuiOnly';

export default function UserEdit () {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'users/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Edit User",
        pageButtons: pageButtons
    }

    const userId = useParams().userId;
    let selectedUser : UserValues | undefined  = USERS.find(user => String(user.id) === userId);
    const selectedUserUndefined = (selectedUser === undefined);
    
    selectedUser = !selectedUserUndefined ? selectedUser : newUser;

    const userItemProps : UserItemValues =  {
        user : selectedUser,
    };


    return (
        <React.Fragment>        
            <PageBar {...pageBarProps}/>
            <UserItem {...userItemProps} />
        </React.Fragment>
    )
}
import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import { USERS } from './UserValues';
import { UserValues, UserItemValues } from './UserValues';

import PageBar from '../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageValues';
import UserItem from './UserItem';


export default function UserEdit () {

    const pageButtons : PageButtonValues[] = [
        {name: 'New', link: 'users/new'}
    ];
    const pageBarProps : PageBarValues = {
        title: "Edit User",
        pageButtons: pageButtons
    }

    const userId = useParams().userId;
    console.log("useParams userId: ", userId)
    const userIdUndefined = (userId === undefined);
    console.log("userIdUndefined: ", userIdUndefined)
    let selectedUser : UserValues | undefined  = USERS.find(user => String(user.id) === userId);
    console.log("selectedUser: ", selectedUser)
    const selectedUserUndefined = (selectedUser === undefined);
    console.log("selectedUserUndefined: ", selectedUserUndefined)

    const newId = USERS.length;
    
    selectedUser = !selectedUserUndefined ? selectedUser :
        {
            id : newId,
            name: '',
            email: '',
            password: '',
            image: '',
            role: '',
            creatorId: 1,
            creatorName: 'Able Baker',
            created: new Date(),
            lastModified: new Date()
        };

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
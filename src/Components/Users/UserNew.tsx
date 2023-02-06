import React, {useState } from 'react';
import { Link } from 'react-router-dom';

import { Paper, TextField, FormControl, FormGroup, Stack, Button, Dialog, Alert, AlertTitle, Autocomplete } from '@mui/material';   

import { users, UserValues } from './UserValues';
import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../../Scaffold/PageParts/PageValues';

export default function UserNew(props: any) {

    const pageButtons : PageButtonValues[] = [{name:'Save', link:'/users'}];
    const pageBarProps : PageBarValues = {
        title: "Add User",
        pageButtons: pageButtons
    }


    //Add the useState hook for setUsersFormValues
    const [usersFormValues, setUsersFormValues] = useState<UserValues>({
        id: users.length + 1,
        name: "",
        email: "",
        password: "",
        image: "",
        creator: ""
    });

    return (
        <>
            <PageBar {...pageBarProps}/>
        </>
    )
}

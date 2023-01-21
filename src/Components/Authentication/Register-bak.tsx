import React from 'react';

import { Paper, FormGroup } from '@mui/material';
import PageTitle from '../../Scaffold/PageParts/PageBar';

const registerButtons = [
    {name: 'Cancel', link: 'users'}
    ];

//write a function that returns an input form with PageTitle and Paper components and a POST method.  
//The PageTitle component should have a title of "Register User" and button array should have name 'Cancel' and link '/users'.
//The Paper component should have a form with the following fields: name, username,email, password, confirm password, and a submit button.
//The submit button should have a label of 'Register'.

export default function Register() {
    return (
        <React.Fragment>
            <PageTitle title="Register User" pageButtons={registerButtons} />
            <Paper>
                {/* <form method="POST" action="/api/users/register"> */}
                <form>
                    <FormGroup>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                        <button type="submit">Register</button>
                    </FormGroup>
                </form>
            </Paper>
        </React.Fragment>
    )
}
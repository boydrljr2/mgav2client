import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, FormGroup, TextField, Button, FormControl, Dialog, Alert, AlertTitle } from '@mui/material';

import MGATextField from '../../Scaffold/FieldParts/MGATextField';
import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageBarValues, PageButtonValues } from '../../Scaffold/PageParts/PageValues';


//write a function that returns an input form with PageTitle and Paper components and a POST method.  
//The PageTitle component should have a title of "Register User" and button array should have name 'Cancel' and link '/users'.
//The Paper component should have a form the includes FormGroup and TextFields with the following fields: name, username,email, password, confirm password, and a submit button.
//The submit button should have a label of 'Register'.

export default function Register() {

    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const pageButtons : PageButtonValues[] = [{name :'none', link:''}];
    const pageBarProps : PageBarValues = {
        title: "Register",
        pageButtons: pageButtons
    }

    const handleSubmit = () => {
        //mailingAddresses.push(mailingAddressFormValues);
        setAlertOpen(true);
        //clearValues();
        console.log('Register submit button clicked');
    }

    const handleAlertClick = () => {
        setAlertOpen(false);
    }  

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <Paper>
                {/* <form method="POST" action="/api/users/register"> */}
                <form>
                    <FormControl>
                        <FormGroup 
                            row
                            sx={{
                                justifyContent: 'left',
                            }}
                        >
                            <MGATextField 
                                id="name" name="name" label="Name" 
                                sx={{ 
                                    minWidth: 900 
                                }} 
                            />
                            <MGATextField 
                                id="username" name="username" label="Username" 
                            />
                            <MGATextField 
                                id="email" name="email" label="Email" 
                            />
                        </FormGroup>
                        <FormGroup     
                            row
                            sx={{
                                justifyContent: 'left',
                            }}
                        >
                            <MGATextField 
                                id="password" name="password" label="Password" 
                            />
                            <MGATextField 
                                id="confirmPassword" name="confirmpassword" label="Confirm Password" 
                            />
                        </FormGroup>
                        <FormGroup     
                            row
                            sx={{
                                justifyContent: 'left',
                            }}
                        >
                            <MGATextField 
                                id="image" name="image" label="Image" 
                                sx={{minWidth:600}}  
                            />
                        </FormGroup>
                        <FormGroup 
                            row
                            sx={{
                                justifyContent: 'left'
                            }}
                        >
                            <Button 
                                variant='contained' 
                                sx={{mt:1, mb:1, mr:1, ml:1}} 
                                onClick={handleSubmit}
                            >Save
                            </Button>
                            <Button 
                                key="Cancel"
                                variant='outlined' 
                                component={Link}
                                to={`/mailing`}
                                sx={{mt:1, mb:1, mr:1, ml:1}}
                            >Cancel
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
            <Dialog open={alertOpen} onClose={handleAlertClick} >
                <Alert><AlertTitle>Success!</AlertTitle></Alert>
            </Dialog>
        </React.Fragment>
    )
}
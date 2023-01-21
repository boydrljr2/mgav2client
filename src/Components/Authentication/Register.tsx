import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, FormGroup, TextField, Button, FormControl, Dialog, Alert, AlertTitle } from '@mui/material';
import PageTitle from '../../Scaffold/PageParts/PageBar';



//write a function that returns an input form with PageTitle and Paper components and a POST method.  
//The PageTitle component should have a title of "Register User" and button array should have name 'Cancel' and link '/users'.
//The Paper component should have a form the includes FormGroup and TextFields with the following fields: name, username,email, password, confirm password, and a submit button.
//The submit button should have a label of 'Register'.

export default function Register() {

    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const pageButtons = [{}];

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
            <PageTitle title="Register User" pageButtons={pageButtons} />
            <Paper>
                {/* <form method="POST" action="/api/users/register"> */}
                <form>
                    <FormControl>
                        <FormGroup 
                            row
                            sx={{
                                justifyContent: 'left',
                                padding:1
                            }}
                        >
                            <TextField id="name" label="Name" variant="outlined" sx={{ mr:2, minWidth: 300 }} />
                            <TextField id="username" label="Username" variant="outlined" sx={{ mr:2,minWidth: 300   }} />
                            <TextField id="email" label="Email" variant="outlined" sx={{ mr:2,minWidth: 300  }}  />
                        </FormGroup>
                        <FormGroup     
                            row
                            sx={{
                                justifyContent: 'left',
                                padding:1
                            }}
                        >
                            <TextField id="password" label="Password" variant="outlined" sx={{ mr:2 }}  />
                            <TextField id="confirmPassword" label="Confirm Password" variant="outlined" sx={{ mr:2 }}  />
                        </FormGroup>
                        <FormGroup     
                            row
                            sx={{
                                justifyContent: 'left',
                                padding:1
                            }}
                        >
                            <TextField id="image" label="Image" variant="outlined" sx={{ mr:2, minWidth:400}}  />
                        </FormGroup>
                        <FormGroup row>
                            <Button 
                                variant='contained' 
                                sx={{marginRight:2}} 
                                onClick={handleSubmit}
                            >Save
                            </Button>
                            <Button 
                                key="Cancel"
                                variant='outlined' 
                                component={Link}
                                to={`/mailing`}
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
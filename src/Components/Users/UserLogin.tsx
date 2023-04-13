import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, Card, Stack, Button } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import PageBar, { PageBarValues, PageButtonValues } from '../Scaffold/PageParts/PageBar';

export default function UserLogin() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "User Login",
        pageButtons: pageButtons
    }

    const initialFormValues = { userEmail: '', userPassword: ''}
    const [formValues, setFormValues] = useState({ ...initialFormValues});

    const initialFormValuesValid = { userEmail: true, userPassword: true}
    const [formValuesValid, setFormValuesValid] = useState({...initialFormValuesValid});

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setFormValuesValid({...formValuesValid, [name]: true})
        console.log("onChangeHandler formValues: ", formValues)
        console.log("onChangeHandler formValuesValid: ", formValuesValid)
    }

    const validatePasswordLength = () => {
        const validPasswordLength = formValues.userPassword.length >= 8;
        setFormValuesValid({...formValuesValid, userPassword: validPasswordLength})
        console.log("validatePasswordLength formValuesValid: ", formValuesValid)
    }

    const isFormValid = () => {
        let temp = {...formValuesValid}  
        console.log("isFormValid temp: ", temp)
        if (Object.values(temp).every(x => x === true)) return (true)
        else return (false)
    }  

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("onSubmitHandler formValues: ", formValues)
       if (!isFormValid()) {
           console.log("onSubmitHandler not formValuesValid: ", formValuesValid)
       }
       if (isFormValid()) {
           console.log("onSubmitHandler formValuesValid: ", formValuesValid)
       }
    }

    return (
        <React.Fragment>
            <Paper
                sx={{ 
                    p: 2, 
                    margin: 'auto', 
                    maxWidth: 500,
                }}
            >
                <PageBar { ...pageBarProps} />
                <form onSubmit={onSubmitHandler}>
                    <Stack>
                        <MGATextField
                            id="useremail" name="userEmail" label="User Email"
                            type="email"
                            required
                            value={formValues.userEmail}
                            onChange={onChangeHandler}
                        >
                        </MGATextField>
                        <MGATextField
                            id="userpassword" name="userPassword" label="Password"
                            type="password"
                            required
                            value={formValues.userPassword}
                            onChange={onChangeHandler}
                            onBlur={validatePasswordLength}
                            error = {!formValuesValid.userPassword}
                            helperText = {formValuesValid.userPassword ? "" : "Password must be at least 8 characters"}
                        >
                        </MGATextField>

                        <Stack 
                            direction='row'
                            spacing={2}
                            sx={{justifyContent:'center'}}
                        >
                            <Button 
                                variant="contained" type="submit"
                            >Login
                            </Button>
                            <Button 
                                variant="outlined" 
                                component={Link}
                                to="/"
                            >Cancel
                            </Button>
                        </Stack>
                    </Stack>            
                </form>

            </Paper>
        </React.Fragment>
    )
}
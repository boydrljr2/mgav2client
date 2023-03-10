import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, Grid, Autocomplete, Button, Dialog, Alert, AlertTitle, Typography } from '@mui/material';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { RoleValues, UserValues, UserItemValues } from './UserValues';
import { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';
import { USERS } from './UserValues'; 

export default function UserItem (userItemProps : UserItemValues) {

    console.log("userItemProps: ", userItemProps)

    const { user } = userItemProps

    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const newId = USERS.length;
    console.log("newId: ", newId)


    const userUndefined = (user === undefined);
    console.log("userIdUndefined: ", userUndefined)
    
    const initialFormValues = 
        !userUndefined ? user :  
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
        }

    const [formValues, setFormValues] = useState({...initialFormValues});
    console.log("formValues: ", formValues)
    const [nameIsValid, setNameIsValid] = useState<boolean>(true);
    const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
    const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
    const [formIsValid, setFormIsValid] = useState<boolean>(true);

    const footerValues = 
        !userUndefined ?
        {
            creatorName     : user.creatorName, 
            created         : user.created, 
            lastModified    : user.lastModified
        } :
        {   
            creatorName     : "Able Baker",
            created         : new Date(),
            lastModified    : new Date()
        }
    console.log('footerValues: ', footerValues)

    const handleMGATextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }
    
    const handleAutocompleteChange = (
        event: React.ChangeEvent<{}>, 
        value: string | null) => {
        setFormValues({...formValues, role: value || ""});
    }

    const handleSubmit = () => {
        console.log("Save clicked")
        console.log("nameIsValid: ", nameIsValid)
        setFormIsValid(nameIsValid ? true : false)
        console.log("formIsValid: ", formIsValid)
        if (formIsValid) {
            USERS.push(formValues);
            setFormValues({...initialFormValues});
            setEmailIsValid(true);
            setNameIsValid(true);
            setPasswordIsValid(true);
            console.log("Form Is Valid")
        }
        if (!formIsValid) {
            console.log("Form Is Not Valid");
            setAlertOpen(true);
        }
        //setAlertOpen(true);
    }

    const handleAlertClick = () => {
        setAlertOpen(false);
    }  

    if (userItemProps === undefined) {
        return (
            <Typography>
                User Item Undefined 
            </Typography>
        )
    }

    return (
            <Paper variant="outlined" sx={{padding:2}}>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <MGATextField
                                id="name" name="name" label="Name"
                                fullWidth
                                required
                                error = {!nameIsValid}
                                helperText = {!nameIsValid ? "Name must be at least 8 characters" : ""}
                                value = {formValues.name}
                                onChange={handleMGATextFieldChange}
                                onBlur={() => formValues.name.length > 7 ? setNameIsValid(true) : setNameIsValid(false)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                disablePortal
                                id="role-values" 
                                options={RoleValues}
                                isOptionEqualToValue={(option, value) => option === value || value === ""}
                                renderInput={(params) => 
                                    <MGATextField {...params} 
                                        name='role' label="Role" required
                                        //apply sx styling to the textfield, not the autocomplete
                                        sx={{}}
                                    />
                                }
                                renderOption={(props, option, state) => {
                                    return (
                                        <li {...props}>
                                            {`${option} `}
                                        </li>
                                    )
                                }}
                                ListboxProps={{
                                    //@ts-ignore
                                    sx:{maxHeight: 200}
                                }}
                                onInputChange={handleAutocompleteChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <MGATextField
                                id="email" name="email" label="Email Address"
                                fullWidth
                                value = {formValues.email}
                                required
                                error = {!emailIsValid}
                                helperText = {!emailIsValid ? "Email format incorrect" : ""}
                                onChange={handleMGATextFieldChange}
                                onBlur={()=> (/$^|.+@.+..+/).test(formValues.email) ? setEmailIsValid(true) : setEmailIsValid(false)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MGATextField
                                id="password" name="password" label="Password"
                                fullWidth
                                value = {formValues.password}
                                required
                                error = {!passwordIsValid}
                                helperText = {!passwordIsValid ? "Password must be at least 8 characters" : ""}
                                onChange={handleMGATextFieldChange}
                                onBlur={()=> formValues.password.length > 7 ? setPasswordIsValid(true) : setPasswordIsValid(false)}
                            />
                        </Grid>

                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <MGATextField
                                id="image" name="image" label="Image"
                                fullWidth
                                value = {formValues.image}
                                onChange={handleMGATextFieldChange}
                            />
                        </Grid>
                    </Grid>
                    <ObjectFooter footerValues={footerValues} />
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item >
                            <Button
                                variant="contained" size='medium'
                                //onClick={handleSubmit}
                            >Save</Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/users'
                            >Cancel</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
    )
}
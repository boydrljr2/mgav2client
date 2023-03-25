import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { UserItemValues, USERS, ROLES, newUser } from '../Scaffold/MGAValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function UserItem (userItemProps : UserItemValues) {

    const navigate = useNavigate();

    const { user } = userItemProps;
    const userUndefined = (user === undefined);

    //Set initialFormValues and use these to generate initialFormErrors/Touches/Valid(s)
    const initialFormValues = !userUndefined ? user : newUser;
    
    //Create a new object with the same keys as initialFormValues and set the values to empty strings
    const initialFormErrors = Object.assign({}, ...Object.keys(initialFormValues).map(k => ({[k]: ""})));
    const initialFormTouches = Object.assign({}, ...Object.keys(initialFormValues).map(k => ({[k]: false})));
    const initialFormValid = Object.assign({}, ...Object.keys(initialFormValues).map(k => ({[k]: true})));

    //Set the state variables
    const [formValues, setFormValues] = useState({...initialFormValues});
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const [formTouches, setFormTouches] = useState({...initialFormTouches});
    const [formValid, setFormValid] = useState({...initialFormValid});

    //Set the objectFooterProps
    const objectFooterProps : ObjectFooterValues = 
        !userUndefined ?
        {
            creatorId       : user.creatorId,
            creatorName     : user.creatorName, 
            created         : user.created, 
            lastModified    : user.lastModified
        } :
        {   
            creatorId       : uuidv4(),
            creatorName     : "userUndefined!",
            created         : new Date(),
            lastModified    : new Date()
        };

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
    };

    const handleNameFieldBlur = () => {
        setFormTouches({...formTouches, name: true})
        validateName()
    }
    const validateName = () => {
        if (formValues.name === undefined) {
            setFormErrors({...formErrors, name: "Name is required"})
            setFormValid({...formValid, name: false})
        } else if (formValues.name.length < 8) {
            setFormErrors({...formErrors, name: "Name must be at least 8 characters"})
            setFormValid({...formValid, name: false})
        } else {
            setFormErrors({...formErrors, name: ""})
            setFormValid({...formValid, name: true})
        }
    }

    const handleRoleBlur = () => {
        setFormTouches({...formTouches, role: true})
        validateRole()
    }
    const validateRole = () => {
        if (formValues.role === null) {
            setFormErrors({...formErrors, role: "Role is required"})
            setFormValid({...formValid, role: false})
        } else {
            console.log("Role is not null")
            setFormErrors({...formErrors, role: ""})
            setFormValid({...formValid, role: true})
        }
    }

    const handleEmailBlur = () => {
        setFormTouches({...formTouches, email: true})
        validateEmail()
    }
    const validateEmail = () => {
        if (formValues.email === undefined) {
            setFormErrors({...formErrors, email: "Email is required"})
            setFormValid({...formValid, email: false})
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
            setFormErrors({...formErrors, email: "Valid email format required"})
            setFormValid({...formValid, email: false})
        } else {
            setFormErrors({...formErrors, email: ""})
            setFormValid({...formValid, email: true})
        }
    }

    const handlePasswordBlur = () => {
        setFormTouches({...formTouches, password: true})
        validatePassword()
    }
    const validatePassword = () => {
        if (formValues.password === undefined) {
            setFormErrors({...formErrors, password: "Password is required"})
            setFormValid({...formValid, password: false})
        } else if (formValues.password.length < 6) {
            setFormErrors({...formErrors, password: "Password must be at least 6 characters"})
            setFormValid({...formValid, password: false})
        } else {
            setFormErrors({...formErrors, password: ""})
            setFormValid({...formValid, password: true})
        }
    }

    const handleImageBlur = () => {
        setFormTouches({...formTouches, image: true})
        validateImage()
    }
    const validateImage = () => {
        if (formValues.image === undefined || formValues.image === "") {
            setFormValues({...formValues, image: ""})
            setFormErrors({...formErrors, image: ""})
            setFormValid({...formValid, image: true})
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(formValues.image)) {
            setFormErrors({...formErrors, image: "Valid image URL required"})
            setFormValid({...formValid, image: false})
        } else {
            setFormErrors({...formErrors, image: ""})
            setFormValid({...formValid, image: true})
        }      
    }

    const updateLastModified = () => {
        setFormValues({...formValues, lastModified: new Date()})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateName()
        validateRole()
        validateEmail()
        validatePassword()
        validateImage()
        updateLastModified()
        //Check if all formValid values are true
        const formIsValid = Object.values(formValid).every((v) => v );
        //If the form is valid, update the USERS array
        if (formIsValid) {

            console.log("onSubmit formIsValid: ", formValues);
            const userIndex = USERS.findIndex((user) => user.id === formValues.id)
            if (userIndex === -1) {
                USERS.push(formValues)
            } else {
                USERS[userIndex] = formValues
            }
        //navigate to the UserPage
            navigate("/users")
        }
    }

    //This early return has to be called after all the useState calls otherwise React crashes
    if (userItemProps === undefined) {
        return (
            <Typography>
                User Item Undefined 
            </Typography>
        )
    }

    return (
        <Paper variant="outlined" sx={{padding:2}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <MGATextField
                            id="name" name="name" label="Name" 
                            value = {formValues.name}
                            onChange = {handleTextFieldChange} 
                            onBlur = {handleNameFieldBlur}
                            error = {formErrors.name !== ""}
                            helperText = {formErrors.name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Add the Autocomplete for the value of Role */}
                        <Autocomplete
                            id="role-autocomplete"
                            options={ROLES}
                            getOptionLabel={(option : any) => option.label}
                            freeSolo
                            clearOnEscape
                            value={formValues.role}
                            isOptionEqualToValue={(option, value) => option.label === value.label}
                            onChange={(event, newValue) => {
                                //@ts-ignore
                                setFormValues({...formValues, role: newValue})
                            }}
                            onBlur={handleRoleBlur}
                            renderInput={(params) => 
                                <MGATextField 
                                    {...params} 
                                    label="Role"
                                    required
                                    error = {!formValid.role}
                                    helperText = {formErrors.role} 
                                />
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <MGATextField
                            id="email" name="email" label="Email Address"
                            type="email"
                            fullWidth 
                            placeholder="Enter email address"
                            value = {formValues.email}
                            onChange={handleTextFieldChange}
                            onBlur={handleEmailBlur}
                            error = {!formValid.email}
                            helperText={formErrors.email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MGATextField
                            id="password" name="password" label="Password"
                            type="password"
                            placeholder="Enter password"
                            fullWidth 
                            value = {formValues.password}
                            onChange={handleTextFieldChange}
                            onBlur={handlePasswordBlur}
                            error = {!formValid.password}
                            helperText={formErrors.password}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MGATextField
                            id="image" name="image" label="Image URL"
                            type="url"
                            placeholder="http://www.example.com/image.jpg"
                            fullWidth
                            value = {formValues.image}
                            onChange={handleTextFieldChange}
                            onBlur={handleImageBlur}
                            error = {!formValid.image}
                            helperText={formErrors.image}
                        />
                    </Grid>
                </Grid>
                <ObjectFooter footerValues={objectFooterProps} />
                <Grid container direction="row" spacing={2}
                    sx={{margin:'auto', justifyContent:"flex-end"}}
                >
                    <Grid item >
                        <Button
                            variant="contained" size='medium'
                            type="submit"
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
            <pre>user {JSON.stringify(user, null, 2)}</pre>
            <pre>initialFormValues {JSON.stringify(initialFormValues, null, 2)}</pre>
            <pre>formValues {JSON.stringify(formValues, null, 2)}</pre>
            <pre>formErrors {JSON.stringify(formErrors, null, 2)}</pre>
            <pre>formValid {JSON.stringify(formValid, null, 2)}</pre>
            <pre>formTouches {JSON.stringify(formTouches, null, 2)}</pre>
        </Paper>
    )
}
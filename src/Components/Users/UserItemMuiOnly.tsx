import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { UserItemValues, USERS, ROLES } from './UserValues';
import { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';
import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';

export default function UserItem (userItemProps : UserItemValues) {

    const { user } = userItemProps
    const userUndefined = (user === undefined);
    
    const initialFormValues = !userUndefined ?
        user :
        {
            id : uuidv4(),
            name: '',
            email: '',
            password: '',
            image: '',
            role: ROLES[0],
            creatorId: 1,
            creatorName: 'Able Baker',
            created: new Date(),
            lastModified: new Date()
        }
    
    const initialFormErrors = {
        name: "",
        role: "",
        email: "",
        password: "",
        image: ""
    }

    const initialFormTouched = {
        name: false,
        role: false,
        email: false,
        password: false,
        image: false
    }

    const initialFormValid = {
        name: true,
        role: true,
        email: true,
        password: true,
        image: true
    }

    const [formValues, setFormValues] = useState({...initialFormValues});
    const [formErrors, setFormErrors] = useState({...initialFormErrors});
    const [formTouched, setFormTouched] = useState({...initialFormTouched});
    const [formValid, setFormValid] = useState({...initialFormValid});

    const objectFooterProps : ObjectFooterValues = 
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

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
    };

    const handleNameFieldBlur = () => {
        setFormTouched({...formTouched, name: true})
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
        setFormTouched({...formTouched, role: true})
        validateRole()
    }
    const validateRole = () => {
        if (formValues.role === null) {
            console.log("Role is null")
            setFormErrors({...formErrors, role: "Role is required"})
            setFormValid({...formValid, role: false})
            console.log("validateRole formErrors: ", formErrors)
            console.log("validateRole formValid: ", formValid)
        } else {
            console.log("Role is not null")
            setFormErrors({...formErrors, role: ""})
            setFormValid({...formValid, role: true})
            console.log("validateRole formErrors: ", formErrors)
            console.log("validateRole formValid: ", formValid)
        }
    }

    const handleEmailBlur = () => {
        setFormTouched({...formTouched, email: true})
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
        setFormTouched({...formTouched, password: true})
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
        setFormTouched({...formTouched, image: true})
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateName()
        validateRole()
        validateEmail()
        validatePassword()
        validateImage()
        //Check if all formValid values are true
        const formIsValid = Object.values(formValid).every((v) => v );
        if (formIsValid) {
            const userIndex = USERS.findIndex((user) => user.id === formValues.id)
            if (userIndex === -1) {
                USERS.push(formValues)
            } else {
                USERS[userIndex] = formValues
            }
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
                            fullWidth 
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
            <pre>{JSON.stringify(USERS, null, 2)}</pre>
            <pre>{JSON.stringify(formValues, null, 2)}</pre>
            <pre>{JSON.stringify(formErrors, null, 2)}</pre>
            <pre>{JSON.stringify(formValid, null, 2)}</pre>
        </Paper>
    )
}
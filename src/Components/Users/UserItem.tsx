import * as React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { Paper, Grid, AutocompleteRenderInputParams, Button } from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import { Autocomplete } from 'formik-mui'

import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';
import {ObjectFooterValues} from '../Scaffold/PageParts/ObjectFooter';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { UserItemValues, USERS, ROLES } from './UserValues'; 

export default function UserItem (userItemProps : UserItemValues ) {

    const { user } = userItemProps;
    const newId = USERS.length

    const userUndefined = ( user === undefined );

    const initialFormValues = 
        !userUndefined ?
            user
            :
            {
                id : newId,
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

    return (
        <Formik
            initialValues={initialFormValues}
            validate= {(values) => {
                const errors = {
                    name: '',
                    role: '',
                    email: '',
                    password: ''
                };
                
                if (!values.name) {
                    errors.name='Required';
                } else if (values.name.length < 8) {    
                    errors.name='Must be 8 characters or more';
                }
            
               if (values.role )
                    errors.role = '';
                else 
                    { errors.role='Select One'; }
            
                if (!values.email) {
                    errors.email='Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email='Invalid email address';
                }
            
                if (!values.password) {
                    errors.password='Required';
                } else if (values.password.length < 8) {
                    errors.password='Must be 8 characters or more';
                }
            
                console.log("userValidation errors: ", errors);
                return errors;
                    
            }}
            onSubmit={(values) => {
                console.log("onSubmit userValidation values: ", values)
                USERS.push(values);
            }}
        >
            {({values, submitForm, resetForm, handleChange, handleBlur, isSubmitting, isValidating, touched, errors}) => (
                <Paper variant='outlined' sx={{padding:2}} >
                    <Form >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={9} >
                                <MGATextField 
                                    id='name' name='name' label='Name'
                                    type='text'
                                    fullWidth 
                                    placeholder="Enter your full name"
                                    error= {touched.name && errors.name !== '' ? true : false}
                                    helperText={touched.name && errors.name !== '' ? "Must be at least 8 characters" : ""}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Field
                                    name="role"
                                    component={Autocomplete}
                                    options={ROLES}
                                    getOptionLabel={(option : any) => option.label}
                                    style={{width: 300}}
                                    renderInput={(params: AutocompleteRenderInputParams) => (
                                        <MGATextField
                                        {...params}
                                        name="role"
                                        error={touched['role'] && !!errors['role']}
                                        helperText={touched.role && !!errors['role'] 
                                            ? "Select One" : ' '}
                                        label="Role"
                                        variant="outlined"
                                        />
                                    )}
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
                                    error = {touched.email && errors.email !== '' ? true : false}
                                    helperText={touched.email && errors.email !== '' ? "Invalid email address" : ""}
                                    value = {values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MGATextField
                                    id="password" name="password" label="Password"
                                    type="password"
                                    placeholder="Enter password"
                                    fullWidth 
                                    error = {touched.password && errors.password !== '' ? true : false}
                                    helperText={touched.password && errors.password !== '' ? "Must be at least 8 characters" : ""}
                                    value = {values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <MGATextField
                                    id="image" name="image" label="Image"
                                    type="url"
                                    fullWidth
                                    placeholder="Enter URL of image" 
                                    value={values.image}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                        </Grid>
                        <ObjectFooter footerValues={objectFooterProps} />
                        <Grid container direction="row" spacing={2}
                            sx={{margin:'auto', justifyContent:"flex-end"}}>
                            <Grid item >
                                <Button
                                    variant="contained" size='medium'
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={() => submitForm()}
                                >Save</Button>
                            </Grid>
                            <Grid item >
                                <Button
                                    variant="outlined" size='medium'
                                    type="reset"
                                    disabled={isSubmitting}
                                    onClick={() => resetForm()}
                                >Reset</Button>
                            </Grid>
                            <Grid item sx={{mr:1}}>
                                <Button
                                    variant="outlined" size='medium'
                                    component={Link} to='/users'
                                >Cancel</Button>
                            </Grid>
                        </Grid>
                    </Form>
                    <pre>{JSON.stringify(USERS, null, 2)}</pre>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                    <pre>{JSON.stringify(isSubmitting, null, 2)}</pre>
                    <pre>{JSON.stringify(isValidating, null, 2)}</pre>
                </Paper>
            )}
        </Formik>
    )
};


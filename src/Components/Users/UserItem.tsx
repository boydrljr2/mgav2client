import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Paper, Grid, AutocompleteRenderInputParams, Button } from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import { Autocomplete, TextField } from 'formik-mui'

import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';
import {ObjectFooterValues} from '../Scaffold/PageParts/ObjectFooter';

import { MGAAutocomplete } from '../Scaffold/FieldParts/MGAAutocomplete';
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
            
               if (values.role.value !== 'Administrator' && values.role.value !== 'User') 
                    { errors.role='Select One'; }
            
                if (!values.email) {
                    errors.email='Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email='Invalid email address';
                }
            
                if (!values.password) {
                    errors.password='Required';
                } else if (values.password.length < 8) {
                    errors.email='Must be 8 characters or more';
                }
            
                console.log("userValidation errors: ", errors);
            
                return errors;
                    
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500 );
            }}
        >
            {formik => (
                <Paper variant='outlined' sx={{padding:2}} >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={9} >
                                <MGATextField 
                                    id='name' name='name' label='Name'
                                    type='text'
                                    fullWidth 
                                    //required
                                    placeholder="Enter your full name"
                                    error= {formik.touched.name && formik.errors.name !== '' ? true : false}
                                    helperText={formik.touched.name && formik.errors.name !== '' ? "Must be at least 8 characters" : ""}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                        error={formik.touched['role'] && !!formik.errors['role']}
                                        helperText={formik.touched.role && !!formik.errors['role'] 
                                            ? "Select One" : ' '}
                                        //error = {formik.touched.role && formik.errors.role !== '' ? true : false}
                                        //helperText={formik.touched['role'] && formik.errors['role']}
                                        label="Role"
                                        variant="outlined"
                                        />
                                    )}
                                />
                                {/* 
                                <Autocomplete 
                                    id="role"
                                    value={roleValue}
                                    onChange={(event, newValue: string | null) => {
                                        //@ts-ignore
                                        setRoleValue(newValue);
                                    }}
                                    inputValue={inputRoleValue}
                                    onInputChange={(event, newInputValue: string | null) => {
                                        //@ts-ignore
                                        setInputRoleValue(newInputValue);
                                    }}
                                    options={ROLES}
                                    renderInput={(params) => 
                                        <MGATextField {...params} 
                                            label="Roles"
                                            placeholder="Select a role"  
                                        />
                                    }
                                />
                                */}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <MGATextField
                                    id="email" name="email" label="Email Address"
                                    type="email"
                                    fullWidth 
                                    //required
                                    placeholder="Enter email address"
                                    error = {formik.touched.email && formik.errors.email !== '' ? true : false}
                                    helperText={formik.touched.email && formik.errors.email !== '' ? "Invalid email address" : ""}
                                    value = {formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MGATextField
                                    id="password" name="password" label="Password"
                                    type="password"
                                    placeholder="Enter password"
                                    fullWidth 
                                    //required
                                    error = {formik.touched.password && formik.errors.password !== '' ? true : false}
                                    helperText={formik.touched.password && formik.errors.password !== '' ? "Must be at least 8 characters" : ""}
                                    value = {formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                    </Form>
                </Paper>
            )}
        </Formik>
    )
};


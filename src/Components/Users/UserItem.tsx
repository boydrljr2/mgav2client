import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Paper, Grid, AutocompleteRenderInputParams, Button } from '@mui/material';
//import MuiTextField from '@mui/material/TextField';
import { Autocomplete } from 'formik-mui'

import ObjectFooter from '../Scaffold/PageParts/ObjectFooter';
import {ObjectFooterValues} from '../Scaffold/PageParts/ObjectFooter';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { UserItemValues, USERS, ROLES } from './UserValues'; 

export default function UserItem (userItemProps : UserItemValues ) {

    const { user } = userItemProps;
    const newId = uuidv4();

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

            onSubmit={(values, {setSubmitting}) => {
                console.log("onSubmit: ", values);
                USERS.push(values);
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 400);
            }}

            validationSchema={Yup.object({
                name: Yup.string()
                    .min(8, 'Must be 8 characters or more')
                    .required('Required'),
            })}


            /*
            validate= {(values) => {
                const errors = {
                    name: '',
                    role: '',
                    email: '',
                    password: '',
                    image: '',
                };
                
                if (!values.name) {
                    errors.name='Required';
                } else if (values.name.length < 8) {    
                    errors.name='Must be 8 characters or more';
                } else {errors.name = ''};
            
               if (values.role ) {
                    errors.role = '';
               } else { errors.role='Select One'; }
                    
            
                if (!values.email) {
                    errors.email='Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email='Invalid email address';
                } else { errors.email=''}
            
                if (!values.password) {
                    errors.password='Required';
                } else if (values.password.length < 8) {
                    errors.password='Must be 8 characters or more';
                } else { errors.password=''}
            
                console.log("userValidation values: ", values)
                console.log("userValidation errors: ", errors);
                console.log("validation USERS: ", USERS);
                return errors;
            }}
            */
        >
            { formik => (
                    <Paper variant='outlined' sx={{padding:2}} >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={9} >
                                    {/* <label htmlFor="name">Name</label> */}
                                    <Field>
                                        <MGATextField
                                            id='name' name='name' label='Name'
                                            type='text'
                                            fullWidth 
                                            placeholder="Enter your full name"
                                            error= {formik.touched.name && formik.errors.name !== '' ? true : false}
                                            helperText={formik.touched.name && formik.errors.name !== '' ? "Must be at least 8 characters" : ""}
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </Field>
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
                                            //error={formik.touched['role'] && !!formik.errors['role']}
                                            //helperText={formik.touched.role && !!formik.errors['role'] 
                                            //    ? "Select One" : ' '}
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
                                        //error = {formik.touched.email && formik.errors.email !== '' ? true : false}
                                        //helperText={formik.touched.email && formik.errors.email !== '' ? "Invalid email address" : ""}
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
                                        //error = {formik.touched.password && formik.errors.password !== '' ? true : false}
                                        //helperText={formik.touched.password && formik.errors.password !== '' ? "Must be at least 8 characters" : ""}
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
                                        disabled={formik.isSubmitting}
                                        //onClick={() => formik.handleSubmit()}
                                    >Save</Button>
                                </Grid>
                                {/*
                                <Grid item >
                                    <Button
                                        variant="outlined" size='medium'
                                        type="reset"
                                        disabled={formik.isSubmitting}
                                        onClick={() => formik.resetForm()}
                                    >Reset</Button>
                                </Grid>
                                */}
                                <Grid item sx={{mr:1}}>
                                    <Button
                                        variant="outlined" size='medium'
                                        component={Link} to='/users'
                                    >Cancel</Button>
                                </Grid>
                            </Grid>
                        </Form>
                        <pre>{JSON.stringify(USERS, null, 2)}</pre>
                        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
                        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
                        <pre>{JSON.stringify(formik.isValid, null, 2)}</pre>
                    </Paper>
            )}
        </Formik>
    )
};


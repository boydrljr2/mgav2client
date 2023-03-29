import React, { isValidElement } from 'react';

export function emailValidation(props : any) {

    let isValid= true;
    console.log( "emailValidation props: ", props)
    console.log( "emailValidation isValid before: ", isValid)

    if (!props) {
        isValid =false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props)) {
        isValid = false;
    } else {
        isValid = true;
    }

    console.log( "emailValidation isValid after: ", isValid)

    return isValid;
}


//@ts-ignore
export const userValidation = values => {

    console.log("userValidation values: ", values);
    console.log("userValidation values.role.value: ", values.role.value);

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

   if (values.role !== 'Administrator' && values.role !== 'User') { errors.role='Select One'; }


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
        
};
    
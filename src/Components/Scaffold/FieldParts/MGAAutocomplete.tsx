import React from 'react';
import { Autocomplete } from '@mui/material';

// React-formik-materia-ui-autocomplete in Codesandbox.io has this Autocomplete import.
// All seems to work with Autocomplete from @mui/material. 
// And 'material-etc...' does not install successfully 
//import { Autocomplete } from 'material-ui-formik-components/Autocomplete';

import { fieldToTextField } from 'formik-material-ui';

import MGATextField from './MGATextField';

//@ts-ignore
export const MGAAutocomplete = ({textFieldProps, ...props}) => {

    const { form: {setTouched, setFieldValue} } = props
    //@ts-ignore
    const { error, helperText, ...field } = fieldToTextField(props)
    const { name } = field

    console.log("MGAAutocomplete textFieldProps: ", textFieldProps)
    console.log("MGAAutocomplete props: ", props)
    console.log("MGAAutocomplete field: ", field)
    console.log("MGAAutocomplete name: ", name)
    console.log("MGAAutocomplete error: ", error)
    console.log("MGAAutocomplete helperText: ", helperText)

    return (
        <Autocomplete
            {...props}
            {...field}
            onChange={(_, value) => setFieldValue(name, value)}
            //@ts-ignore
            onBlur={() => setTouched({ [name] : true})}
            //@ts-ignore
            getOptionSelected={(item, current) => item.value === current.value}
            renderInput={props => (
                <MGATextField
                    {...props}
                    {...textFieldProps}
                    error={error}
                    helperText={helperText}
                />            
            )}
        />
    )
}
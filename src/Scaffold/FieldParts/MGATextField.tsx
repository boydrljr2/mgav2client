import { TextField, TextFieldProps } from "@mui/material";

export const MGATextFieldStyle200 = {
    minWidth : 200 ,
    margin : 1 ,
}

export const MGATextFieldStyle400 = {
    minWidth : 400 ,
    margin : 1 
}

export const MGATextFieldStyle100 = {
    maxWidth : 100 ,
    margin : 1 
}

export const MGATextFieldStyle50 = {
    maxWidth : 50 ,
    margin : 1 
}

export default function MGATextField(props: TextFieldProps) {

    return (
        <TextField
            {...props}
            variant='outlined'
        />
    )
}
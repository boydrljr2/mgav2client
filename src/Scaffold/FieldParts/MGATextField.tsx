import { TextField, TextFieldProps } from "@mui/material";

export const MGATextFieldStyle = {
    margin : 1 ,
    /*
    "& .MuiOutlinedInput-root" : {
        "& fieldset" : {
            margin : 1 
        }
    }
    */
}

export const MGATextFieldStyle400 = {
    minWidth : 400 ,
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
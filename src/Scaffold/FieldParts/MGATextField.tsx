import { TextField, TextFieldProps } from "@mui/material";

const MGATextFieldStyle = {
    "& .MuiOutlinedInput-root" : {
        "& fieldset" : {
            margin : 1 
        }
    }
}

export default function MGATextField(props: TextFieldProps) {
    return (
        <TextField
            {...props}
            variant='outlined'
            sx={MGATextFieldStyle}
        />
    )
}
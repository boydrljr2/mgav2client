import { TextField, TextFieldProps } from "@mui/material";

export default function MGATextField(props: TextFieldProps) {

    return (
        <TextField
            {...props}
            variant='outlined'
            sx={{margin:1}}
        />
    )
}
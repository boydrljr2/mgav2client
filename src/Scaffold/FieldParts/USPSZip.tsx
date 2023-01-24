import React, {useState} from "react";
import {TextField} from "@mui/material";

export function USPSZipCode(props: any) {

    console.log('USPSZipCode props: ', props);

    const [zipCode, setZipCode] = useState<string>(props.zipCode);
    const [zipCodeError, setZipCodeError] = useState<boolean>(false);
    const [zipCodeErrorMessage, setZipCodeErrorMessage] = useState<string>("");

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setZipCode(value);
        console.log('handleZipCodeChange e.target.name: ', e.target.name)
        console.log('handleZipCodeChange e.target.value: ', e.target.value)
        console.log('handleZipCodeChange zipCode: ', zipCode)
    }

    const handleZipCodeBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('handleZipCodeBlur e.target.value: ', e.target.value)
        console.log('handleZipCodeBlur zipCode: ', zipCode)
        if (zipCode.length !== 5) {
            setZipCodeError(true);
            setZipCodeErrorMessage("Must be 5 digits");
        }
        if (zipCode.length === 5) {
            setZipCodeError(false);
            setZipCodeErrorMessage("");
        }
    }

    return (
        <TextField
            id="zip-code"
            name="zipCode"
            label="Zip Code"
            inputProps={{maxLength: 5}}
            variant="outlined"
            sx={{width: 120, margin: 1}}
            error={zipCodeError}
            helperText={zipCodeErrorMessage}
            value={props.zipCode}
            onChange={handleZipCodeChange}
            onBlur={handleZipCodeBlur}
        />
    )
}

import React, {useState} from 'react';
import { Paper, TextField, FormControl, FormGroup, Stack, Button, Dialog, Alert, AlertTitle, Autocomplete } from '@mui/material';
import { USStateAutocomplete, USStateAbbreviations } from "../Shared/USStates";
import { USZipCodeTextField } from "../Shared/USZip";

export interface MailingAddressValues {
    streetAddress1: string;
    city: string;
    state: string;
    zip: string;
}

export const mailingAddresses : Array<MailingAddressValues> = [
    {
        streetAddress1: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    {
        streetAddress1: "1313 Mockingbird Lane",
        city: "Anytown",
        state: "OH",
        zip: "12345"
    }
]

export default function MailingAddressForm() {

    const getDefaultMailingAddressFormValues = () => {
        return {
            id: mailingAddresses.length + 1,
            streetAddress1: "",
            streetAddress2: "",
            city: "",
            state: "",
            zip: ""
        }
    }

    const [mailingAddressFormValues, setMailingAddressFormValues] = useState<MailingAddressValues>(getDefaultMailingAddressFormValues());
    const [zipCodeError, setZipCodeError] = useState<boolean>(false);
    const [zipCodeErrorMessage, setZipCodeErrorMessage] = useState<string>("");
    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setMailingAddressFormValues({...mailingAddressFormValues, [name]: value});
        console.log('handleTextFieldChange e.target.name: ', e.target.name)
        console.log('handleTextFieldChange e.target.value: ', e.target.value)
        console.log('handleTextFieldChange mailingAddressValue: ', mailingAddressFormValues)
    }

    const handleUSStateAutocompleteChange = (
            e: React.SyntheticEvent<Element, Event>,
            value: string
        ) => {
            setMailingAddressFormValues({...mailingAddressFormValues, state: value})
            console.log('handleUSStateAutocompleteChange value: ', value)
            console.log('handleUSStateAutocompleteChange mailingAddressValue: ', mailingAddressFormValues)
    }

    const handleZipCodeBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('handleZipCodeBlur e.target.value: ', e.target.value)
        console.log('handleZipCodeBlur mailingAddressValue: ', mailingAddressFormValues.zip)
        if (e.target.value.length !== 5) {
            setZipCodeError(true);
            setZipCodeErrorMessage("Zip Code must be 5 digits");
        }
        if (e.target.value.length === 5) {
            setZipCodeError(false);
            setZipCodeErrorMessage("");
        }
    }

    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setMailingAddressFormValues({...mailingAddressFormValues, [name]: value});
        console.log('handleZipCodeChange e.target.name: ', e.target.name)
        console.log('handleZipCodeChange e.target.value: ', e.target.value)
        console.log('handleZipCodeChange mailingAddressFormValue: ', mailingAddressFormValues)
    }

    const handleSubmit = () => {
        mailingAddresses.push(mailingAddressFormValues);
        setAlertOpen(true);
        clearValues();
        console.log('handleSubmit contacts: ', mailingAddresses);
    }

    const handleClear = () => {
        clearValues();
    }
        
    const clearValues = () => {
        setMailingAddressFormValues({...getDefaultMailingAddressFormValues()})
        console.log('clearValues contactValues: ', mailingAddressFormValues )
    }

    const handleAlertClick = () => {
        setAlertOpen(false);
    }    

    return (
        <React.Fragment>
            <Paper>
                <form>
                    <FormControl>
                        <Stack spacing={1} sx={{padding:2}}>
                            <TextField
                                id="streetAddress1"
                                name = "streetAddress1"
                                label= "Street Address"
                                variant='outlined'
                                multiline
                                rows={2}
                                value={mailingAddressFormValues.streetAddress1}
                                sx={{minWidth: 500}}
                                onChange={handleTextFieldChange}
                            />
                            <FormGroup row sx={{padding:2, justifyContent:"space-between"}}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
                                    variant='outlined'
                                    value={mailingAddressFormValues.city}
                                    sx={{minWidth: 300, marginRight: 2}}
                                    onChange={handleTextFieldChange}
                                />
                                
                                <Autocomplete
                                    id="us-state"
                                    includeInputInList
                                    sx={{minWidth: 180, marginRight: 2}}
                                    options={USStateAbbreviations}
                                    inputValue={mailingAddressFormValues.state || ""}
                                    //value={mailingAddressFormValues.state || ""}
                                    getOptionLabel={(option) => option.abbreviation}
                                    renderInput={(params) => 
                                        <TextField {...params} label="State" variant="outlined" />
                                    }
                                    renderOption={(props, option)=> {
                                        return (
                                            <li {...props}>
                                                {option.abbreviation}:{option.name}
                                            </li>
                                        )
                                    }}
                                    
                                    onInputChange={handleUSStateAutocompleteChange}
                                />    
                                
                                {/*
                                <USStateAutocomplete
                                    value={mailingAddressValue.state || ""}
                                    inputValue={mailingAddressValue.state}
                                    onInputChange={handleUSStateAutocompleteChange}
                                />
                                */}

                                <TextField
                                    id="zip"
                                    name='zip'
                                    label="ZIP"
                                    variant='outlined'
                                    inputProps={{maxLength: 5}}
                                    sx={{minWidth: 50}}
                                    value={mailingAddressFormValues.zip}
                                    error={zipCodeError}
                                    helperText={zipCodeErrorMessage}
                                    onChange={handleZipCodeChange}
                                    onBlur={handleZipCodeBlur}
                                />

                                {/* <USZipCodeTextField /> */}

                            </FormGroup>
                            <FormGroup row>
                                <Button variant='contained' sx={{marginRight:2}} onClick={handleSubmit}>Save</Button>
                                <Button variant='outlined' onClick={handleClear} >Cancel</Button>
                            </FormGroup>
                        </Stack>
                    </FormControl>
                </form>
            </Paper>
            <Dialog open={alertOpen} onClose={handleAlertClick} >
                <Alert><AlertTitle>Success!</AlertTitle></Alert>
            </Dialog>
        </React.Fragment>
    )
}



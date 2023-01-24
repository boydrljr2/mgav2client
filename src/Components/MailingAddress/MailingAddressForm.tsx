import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Paper, TextField, FormControl, FormGroup, Stack, Button, Dialog, Alert, AlertTitle, Autocomplete } from '@mui/material';

import { mailingAddresses } from './MailingAddressData';
import MailingAddressValues from './MailingAddressValues';
import { USPSState, USPSStateAbbreviations } from "../../Scaffold/FieldParts/USPSStates";
import { USPSZipCode } from "../../Scaffold/FieldParts/USPSZip";

export default function MailingAddressForm() {

    const pageButtons = [{}];

    const getDefaultMailingAddressFormValues = () => {
        return {
            id: mailingAddresses.length + 1,
            name: "",
            initial: "",
            streetAddress: "",
            city: "",
            state: "",
            zip: ""
        };

    }

    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [mailingAddressFormValues, setMailingAddressFormValues] = useState<MailingAddressValues>(
        getDefaultMailingAddressFormValues()
    );

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        console.log('handleTextFieldChange e.target.name: ', e.target.name, " value: ", e.target.value)
        setMailingAddressFormValues({...mailingAddressFormValues, [name]: value});
    }

    const handleTextFieldBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        console.log('handleTextFieldChange e.target.name: ', name, " value: ", value)
    }


    const handleUSStateChange = (
            e: React.SyntheticEvent<Element, Event>,
            value: string
        ) => {
            console.log('handleUSStateChange e.target.value: ', e.target)
            setMailingAddressFormValues({...mailingAddressFormValues, state : value})
    }

    const handleUSStateBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('handleUSStateBlur e.target.value: ', e.target.value)
        console.log('handleUSStateBlur mailingAddressValue: ', mailingAddressFormValues.state)
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
        console.log('handleSubmit mailing addresses: ', mailingAddresses);
    }

    const handleClear = () => {
        clearValues();

    }
        
    const clearValues = () => {
        setMailingAddressFormValues({...getDefaultMailingAddressFormValues()})
        //setZipCodeError(false);
        //setZipCodeErrorMessage("");
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
                                id="name"
                                name = "name"
                                label= "Location Name"
                                variant='outlined'
                                rows={2}
                                value={mailingAddressFormValues.name}
                                sx={{minWidth: 500, padding:1}}
                                onChange={handleTextFieldChange}
                                onBlur={handleTextFieldBlur}
                            />
                            <TextField
                                id="streetAddress"
                                name = "streetAddress"
                                label= "Street Address"
                                variant='outlined'
                                multiline
                                rows={2}
                                value={mailingAddressFormValues.streetAddress}
                                sx={{minWidth: 500, padding:1}}
                                onChange={handleTextFieldChange}
                                onBlur={handleTextFieldBlur}
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
                                    options={USPSStateAbbreviations}
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
                                    
                                    onInputChange={handleUSStateChange}
                                />    

                                <USPSState 
                                    value={mailingAddressFormValues.state}
                                    onInputChange={handleZipCodeChange}
                                />

                                <USPSZipCode
                                    value={mailingAddressFormValues.zip}
                                    onInputChange={handleZipCodeChange}
                                />

                            </FormGroup>
                            <FormGroup row>
                                <Button variant='contained' sx={{marginRight:2}} onClick={handleSubmit}>Save</Button>
                                <Button 
                                    key="Cancel"
                                    variant='outlined' 
                                    component={Link}
                                    to={`/mailing`}
                                >Cancel
                                </Button>
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



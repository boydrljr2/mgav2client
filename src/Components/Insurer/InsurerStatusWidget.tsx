import React, {useState} from 'react';
import {Autocomplete, TextField} from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

const insurerStatuses = [ "Active", "Inactive", "Pending", "Suspended", "Terminated" ];

export default function InsurerStatusWidget(props: any) {   
    
    /* 
    insurerStatus : string, 
    handleInsurerStatusChange : (e: any, value: string) => void) 
    )
    */

    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    //write a handleInsurerStatusBlur that tests the value of the insurerStatus, 
    //and if it is empty, set the error state to true and set the error message to "Select Status"
    const handleInsurerStatusBlur = () => {
        console.log('handleInsurerStatusBlur e.target.value: ')
        console.log('handleInsurerStatusBlur insurerStatus: ', props.insurerStatus)
        if (props.insurerStatus === "") {
            setError(true);
            setErrorMessage("Select Status");
        } else {
            setError(false);
            setErrorMessage(null);
        }
    }


    return (
        <Autocomplete
            id="insurer-status"
            includeInputInList
            options={insurerStatuses}
            renderInput={(params) => 
                <MGATextField {...params} label="Status" variant="outlined" />
            }
            renderOption={(props, option)=> {
                return (
                    <li {...props}>
                        {option}
                    </li>
                )
            }}
            //onBlur={handleInsurerStatusBlur}
        />
    )
}
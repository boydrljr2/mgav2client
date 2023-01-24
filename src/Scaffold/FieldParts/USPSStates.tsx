import React, {useState} from "react";

import { Autocomplete, TextField } from "@mui/material";

//array of all 50 US States
export const USPSStateAbbreviations = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' },
    { name: 'Armed Forces Americas', abbreviation: 'AA' },
    { name: 'Armed Forces Europe', abbreviation: 'AE' },
    { name: 'Armed Forces Pacific', abbreviation: 'AP' },
    { name: 'Alberta', abbreviation: 'AB' },
    { name: 'British Columbia', abbreviation: 'BC' },
    { name: 'Manitoba', abbreviation: 'MB' },
    { name: '', abbreviation: ''}
]


export function USPSState(props: any) {

    console.log('USPSState props: ', props );

    const [uspsStateError, setUSPSStateError ] = useState<boolean>(false);
    const [uspsStateErrorMessage, setUSPSStateErrorMessage] = useState<string>('');


    //Write a function to handle onBlur for Autocomplete field 
    //and if the field is empty display an error message
    const handleUSPSStateBlur = (event: any) => {
        console.log('handleUSPSStateBlur e.t.value: ', event.target.value);
        if (event.target.value === '') {
            setUSPSStateError(true);
            setUSPSStateErrorMessage('Please select a state');
        } else {
            setUSPSStateError(false)
            setUSPSStateErrorMessage('');
        }
    }


    return (
        <Autocomplete
            id="us-state-abbrev"
            includeInputInList
            sx={{minWidth: 160, margin:1}}
            options={USPSStateAbbreviations}
            getOptionLabel={(option) => option.abbreviation}
            renderInput={(params) => 
                <TextField {...params} label="State" variant="outlined" />
            }
            renderOption={(props, option)=> {
                return (
                    <li {...props}>
                        {option.abbreviation} - {option.name}
                    </li>
                )
            }}
            inputValue={props.stateAbbrev}
            onInputChange={props.handleUSPSStateInputChange}
            onBlur={handleUSPSStateBlur}
        />   
    )
}




import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button, Typography } from '@mui/material';
import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { AgencyItemValues, AGENCIES, newAgency } from '../Scaffold/MGAValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function AgencyItem (agencyItemProps : AgencyItemValues) {

    const navigate = useNavigate();

    const { agency } = agencyItemProps;
    const agencyUndefined = (agency === undefined);
    const initialFormValues = !agencyUndefined ? agency : newAgency;

    const [formValues, setFormValues] = useState(initialFormValues);

    const objectFooterProps : ObjectFooterValues = 
        !agencyUndefined ?
        {
            creatorId       : agency.creatorId,
            creatorName     : agency.creatorName, 
            created         : agency.created, 
            lastModified    : agency.lastModified
        } :
        {   
            creatorId       : uuidv4(),
            creatorName     : "Yankee Zulu",
            created         : new Date(),
            lastModified    : new Date()
        };
    
    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({...formValues, [name] : value})
    };

    if (agencyItemProps === undefined) {
        return (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Agency Item Undefined
            </Typography>
        )
    }

    return (
        <Paper variant='outlined' sx={{ p: 2, m: 1, flexGrow: 1 }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <MGATextField
                            id="name" name="name" label="Agency Name"
                            value={formValues.name}
                            onChange={handleTextFieldChange}
                            />
                    </Grid>
                </Grid>
                <ObjectFooter footerValues={objectFooterProps} />
            </form>
        </Paper>
    )
}

    
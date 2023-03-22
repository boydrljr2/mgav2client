import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Paper, Grid, Autocomplete, Button, Typography, outlinedInputClasses } from '@mui/material';

import MGATextField from '../Scaffold/FieldParts/MGATextField';

import { INSURERS, InsurerItemValues, newInsurer } from './InsurerValues';
import ObjectFooter, { ObjectFooterValues } from '../Scaffold/PageParts/ObjectFooter';

export default function InsurerItemMuiOnly(insurerItemProps : InsurerItemValues) {

    const navigate = useNavigate();

    const { insurer } = insurerItemProps;
    const insurerUndefined = (insurer === undefined);

    const initialFormValues = !insurerUndefined ? insurer : newInsurer;

    const objectFooterProps : ObjectFooterValues = !insurerUndefined ?
    {
        creatorName     : insurer.creatorName, 
        created         : insurer.created, 
        lastModified    : insurer.lastModified
    } :
    {   
        creatorName     : "Able Baker",
        created         : new Date(),
        lastModified    : new Date()
    }

    return (
        <Paper variant="outlined" sx={{padding: 2}}>
            Hello from InsurerItemMuiOnly
            <ObjectFooter footerValues={objectFooterProps} />
        </Paper>
    )
}

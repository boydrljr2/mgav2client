import React from 'react';
import { Link } from 'react-router-dom';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export interface ObjectFooterValues {
    creatorId       : string;
    creatorName     : string;
    created         : Date;
    lastModified    : Date;
}

export default function ObjectFooter (props: {footerValues: ObjectFooterValues}) {

    const {footerValues} = props;
    const created = new Date(footerValues.created).toLocaleDateString(
        'en-US', {month: 'short', day: 'numeric', year: 'numeric'}
    );
    const lastModified = new Date(footerValues.lastModified).toLocaleDateString(
        'en-US', {month: 'short', day: 'numeric', year: 'numeric'}
    );

    return (
        <Grid container>
            <Grid item 
                sx={{margin: 1, display : "flex", flexDirection: "column", width: '100%' }} 
            >
                <Typography
                    sx={{margin: 1, fontSize: '.75rem'}}
                >
                    Created By: {footerValues.creatorName}  :
                    Initialized Date: {created.toLocaleString().split(',')[0]} : 
                    Last Modified Date: {lastModified.toLocaleString().split(',')[0]}
                </Typography>
            </Grid>
        </Grid>
    );
}
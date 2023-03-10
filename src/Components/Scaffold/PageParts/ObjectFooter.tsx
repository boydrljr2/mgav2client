import React from 'react';

import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//import { ObjectFooterValues } from './ObjectFooterValues';
export interface ObjectFooterValues {
    creatorName?: String;
    created: Date;
    lastModified: Date;
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
                <Divider sx={{margin: 1}} />
                <Typography
                    sx={{margin: 1, fontSize: '.75rem'}}
                >
                    Created By: {footerValues.creatorName} :
                    Initialized Date: {created.toString()} : 
                    Last Modified Date: {lastModified.toString()}
                </Typography>
            </Grid>
        </Grid>
    );
}
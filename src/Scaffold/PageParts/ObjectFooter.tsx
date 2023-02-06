import React from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { ObjectFooterValues } from './ObjectFooterValues';


export default function ObjectFooter (props: {footerValues: ObjectFooterValues}) {

    const {footerValues} = props;
    const dateEntered = new Date(footerValues.enteredDate).toLocaleDateString(
        'en-US', {month: 'short', day: 'numeric', year: 'numeric'}
    );
    const dateLastModified = new Date(footerValues.lastModifiedDate).toLocaleDateString(
        'en-US', {month: 'short', day: 'numeric', year: 'numeric'}
    );

    return (
        <React.Fragment>
            <Box 
                sx={{margin: 1, display : "flex", flexDirection: "column", width: '100%' }} 
            >
                <Divider sx={{margin: 1}} />
                <Typography
                    sx={{margin: 1, fontSize: '.75rem'}}
                >Initialized Date: {dateEntered.toString()} : Last Modified Date: {dateLastModified}
                </Typography>
            </Box>
        </React.Fragment>
    );
}
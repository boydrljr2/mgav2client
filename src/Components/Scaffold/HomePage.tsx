import React from 'react';

import { Paper, Typography } from '@mui/material';
import PageBar, { PageBarValues, PageButtonValues } from './PageParts/PageBar'

export default function HomePage() {

    const pageButtons : PageButtonValues[] = [];
    const pageBarProps : PageBarValues = {
        title: "Home",
        pageButtons: pageButtons
    }

    return(
        <React.Fragment>
            <PageBar {...pageBarProps}/>
            <Paper variant="outlined" sx={{margin:2}}>
                <Typography variant="h6" sx={{padding: 2}}>
                    Home Page Dashboard to be developed
                </Typography>
            </Paper>
        </React.Fragment>
    )
}
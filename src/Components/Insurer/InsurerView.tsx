import React from 'react';

import {Paper, Typography, Divider, Stack, Box, Toolbar } from '@mui/material';

import { insurers } from './insurers';

import InsurerHeader from './InsurerHeader';
import PageBar from '../../Scaffold/PageParts/PageBar';
import { PageButtonValues, PageBarValues } from '../../Scaffold/PageParts/PageValues';

export default function InsurerView() {

    const pageButtons : PageButtonValues[] = [
        { name: 'Edit', link: '/insurers/view'}
    ];
    const pageBarProps : PageBarValues = {
        title: "View Insurer",
        pageButtons: pageButtons
    }


    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <Paper variant="outlined">
                <InsurerHeader insurer={insurers[0]} />
            </Paper>
        </React.Fragment>
        

    )
}

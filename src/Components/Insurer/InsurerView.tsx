import React from 'react';
import { useParams } from 'react-router-dom';

import {Paper, Typography, Divider, Stack, Box, Toolbar } from '@mui/material';

import { insurers } from './insurers';

import InsurerHeader from './InsurerHeader';
import PageBar from '../../Scaffold/PageParts/PageBar';
import MailingAddressView from '../MailingAddress/MailingAddressView';
import { PageButtonValues, PageBarValues } from '../../Scaffold/PageParts/PageValues';
import { MailingAddressValues } from '../../Scaffold/MGAValues';

//Add useParams to the insurer id from the url and display the correct insurer

export default function InsurerView() {

    const pageButtons : PageButtonValues[] = [
        { name: 'Cancel', link: 'insurers'},
        { name: 'Edit', link: 'insurers/view'}
    ];
    const pageBarProps : PageBarValues = {
        title: "View Insurer",
        pageButtons: pageButtons
    }

    const insurerId = useParams().insurerId;

    const insurerIdNotUndefined = (insurerId !== undefined);
    console.log( "insurerId: " + insurerId);

    const selectedInsurer = insurers.find(insurer => insurer.id === Number(insurerId));
    const selectedInsurerNotUndefined = (selectedInsurer !== undefined);
    const selectedInsurerMANotUndefined = (selectedInsurer?.insurerMailingAddress !== undefined);
    
    console.log( "selectedInsurer: " + selectedInsurer);

    return (
        <React.Fragment>
            <PageBar {...pageBarProps} />
            <Paper variant="outlined">
                {insurerIdNotUndefined && selectedInsurerNotUndefined && selectedInsurerMANotUndefined && (
                    <>
                        <InsurerHeader selectedInsurer={selectedInsurer} />
                        <Divider sx={{margin: 1}}/>
                        <MailingAddressView mailingAddress={selectedInsurer.insurerMailingAddress} />
                    </>
                )}
            </Paper>
        </React.Fragment>
        

    )
}

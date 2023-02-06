import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import { InsuredValues } from '../Scaffold/MGAValues';

export default function InsuredCardView(props: {insured: InsuredValues}) {

    const getFullName = (insured: InsuredValues | undefined) => {
        if (insured === undefined) {
            return " ";
        } else {

        return (insured.personName.firstName + " " 
                + ((insured.personName.middleName !== undefined) ? insured.personName.middleName : "") 
                + " " + insured.personName.lastName);
        }
    }

    const getCardContent = (insured: InsuredValues | undefined)  => {
        if (insured === undefined) {
            return (
                <Typography>No Address </Typography>
            )
        } else {
            if (insured.personMailingAddress === undefined) {
                return (
                    <Typography>No Address </Typography>
                )
            }
            return (
                <React.Fragment>
                    <Typography>{insured.personMailingAddress.streetAddress}</Typography>
                    <Typography>{insured.personMailingAddress.city + ", " + insured.personMailingAddress.state + " " + insured.personMailingAddress.zip}</Typography>
                </React.Fragment>
                
            )
        }
    }

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={getFullName(props.insured)}
                subheader="Insured"
                avatar={
                    <Avatar
                           sx={{ bgcolor: 'primary.main' }}
                    > I 
                    </Avatar>
                 }
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack>
                    {getCardContent(props.insured)} 
                    <Typography>{props.insured.personPhone}</Typography>
                    <Typography>{props.insured.personEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

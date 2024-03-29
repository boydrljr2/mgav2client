import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import { InsuredValues } from '../Scaffold/MGAValues';

export default function InsuredCardView(props: {insured: InsuredValues}) {

    const getCardContent = (insured: InsuredValues | undefined)  => {
        if (insured === undefined) {
            return (
                <Typography>No Address </Typography>
            )
        } else {
            if (insured.mailingAddress === undefined) {
                return (
                    <Typography>No Address </Typography>
                )
            }
            return (
                <React.Fragment>
                    <Typography>{insured.mailingAddress.streetAddress1}</Typography>
                    <Typography>{insured.mailingAddress.city + ", " + insured.mailingAddress.state + " " + insured.mailingAddress.zip}</Typography>
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
                title={props.insured.name}
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
                    <Typography>{props.insured.phone}</Typography>
                    <Typography>{props.insured.email}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

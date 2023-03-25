import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import {AgencyValues} from '../Scaffold/MGAValues';

export default function AgencyCardView(props: {agency: AgencyValues}) {

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={props.agency.name}
                subheader="Agency"
                avatar={
                    <Avatar
                           sx={{ bgcolor: 'primary.main' }}
                    > A 
                    </Avatar>
                 }
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack>
                    <Typography>{props.agency.mailingAddress.streetAddress}</Typography>
                    <Typography>{props.agency.mailingAddress.city}, {props.agency.mailingAddress.state.value} {props.agency.mailingAddress.zip}</Typography>
                    <Typography>{props.agency.phone}</Typography>
                    <Typography>{props.agency.principalEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
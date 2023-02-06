import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import {AgencyValues} from '../../Scaffold/MGAValues';

export default function AgencyCardView(props: {agency: AgencyValues}) {

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={props.agency.agencyName}
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
                    <Typography>{props.agency.agencyMailingAddress.streetAddress}</Typography>
                    <Typography>{props.agency.agencyMailingAddress.city}, {props.agency.agencyMailingAddress.state} {props.agency.agencyMailingAddress.zip}</Typography>
                    <Typography>{props.agency.agencyPhone}</Typography>
                    <Typography>{props.agency.agencyEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
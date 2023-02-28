import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import {InsurerValues} from '../Scaffold/MGAValues'

export default function InsurerCardView(props: {insurer: InsurerValues}) {

    const insurer = props.insurer;
    const mailingAddress = insurer.insurerMailingAddress;
    const insurerNotUndefined = (insurer !== undefined);

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={insurer.insurerName}
                subheader={insurer.insurerFEIN}
                avatar={
                    <Avatar
                           sx={{ bgcolor: 'primary.main' }}
                    > N 
                    </Avatar>
                 }
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack>
                        <Typography>{mailingAddress.streetAddress}</Typography>
                        <Typography>{mailingAddress.city}, 
                                    {mailingAddress.state} 
                                    {mailingAddress.zip}
                        </Typography>
                    <Typography>{insurer.insurerPhone}</Typography>
                    <Typography>{insurer.insurerEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
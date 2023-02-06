import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import {InsurerValues} from '../../Scaffold/MGAValues'

export default function InsurerCardView(props: {insurer: InsurerValues}) {

    const {insurer} = props;

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={insurer.insurerName}
                subheader="Insurer"
                avatar={
                    <Avatar
                           sx={{ bgcolor: 'primary.main' }}
                    > N 
                    </Avatar>
                 }
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Stack>
                    <Typography>{insurer.insurerMailingAddress.streetAddress}</Typography>
                    <Typography>{insurer.insurerMailingAddress.city}, 
                                {insurer.insurerMailingAddress.state} 
                                {insurer.insurerMailingAddress.zip}
                    </Typography>
                    <Typography>{insurer.insurerPhone}</Typography>
                    <Typography>{insurer.insurerEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
import React from 'react';

import { Avatar, Card, CardContent, CardHeader, Typography, Stack } from '@mui/material';

import {InsurerValues} from '../Scaffold/MGAValues'

export default function InsurerCardView(props: {insurer: InsurerValues}) {

    const insurer = props.insurer;
    const mailingAddress = insurer.mailingAddress;
    const insurerNotUndefined = (insurer !== undefined);

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
            variant="outlined"
        >
            <CardHeader
                sx={{ fontSize : '2.0 rem'}}
                title={insurer.name}
                subheader={insurer.FEIN}
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
                                    {mailingAddress.state.value} 
                                    {mailingAddress.zip}
                        </Typography>
                    <Typography>{insurer.phone}</Typography>
                    <Typography>{insurer.principalEmail}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
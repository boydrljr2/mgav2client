import { Avatar, Button, Card, CardContent, CardHeader, CardActions, Grid, List, ListSubheader, Typography } from '@mui/material'
import { mailingAddresses } from './MailingAddressData';

export default function MailingAddressCardGrid() {
    return (
        <Grid container spacing={2}>
            {mailingAddresses.map((mailingAddress) => (
                <Grid item key={mailingAddress.id} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardHeader 
                            sx={{ fontSize : '1.5rem'}}
                            title={(mailingAddress.name !== undefined) ? mailingAddress.name : mailingAddress.streetAddress}
                            avatar={
                               <Avatar> {(mailingAddress.initial !== undefined) ? mailingAddress.initial[0]  : 'X'} </Avatar>
                            }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            {(mailingAddress.name !== undefined) ?
                                <Typography gutterBottom variant="h6" component="h6"  color='text.secondary'>
                                        {mailingAddress.name}
                                </Typography>
                                : null
                            }
                            <Typography color='text.secondary'>
                                {mailingAddress.streetAddress}
                            </Typography>
                            <Typography color='text.secondary'>
                                {mailingAddress.city}, {mailingAddress.state.value}  {mailingAddress.zip}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined">Edit</Button>
                            <Button size="small" variant="outlined" >Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

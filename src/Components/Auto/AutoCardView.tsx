import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, Typography, Stack, Divider } from '@mui/material'

import { AutoValues } from '../Scaffold/MGAValues';

export default function PolicyCardGrid( props: {autos: AutoValues[]}) {
    return (
        <React.Fragment>
        <Typography
            sx={{color: 'primary.main', fontSize: '1.2rem'}}
            >Auto Units
        </Typography>
        <Grid container spacing={2}>
            {props.autos.map((auto) => (
                <Grid item key={auto.unit} xs={12} md={4}>
                    <Card 
                        sx={{ display: 'flex', flexDirection: 'column'}}
                        variant="outlined"
                    >
                        <CardHeader 
                            sx={{ fontSize : '2.0 rem'}}
                            title={auto.make + ' ' + auto.model + ' ' + auto.year}
                            // add a subheader with "VIN: " and the auto.autoVIN value
                            subheader={'VIN: ' + auto.vin}

                            avatar={
                               <Avatar
                                      sx={{ bgcolor: 'primary.main' }}
                               > {auto.unit} 
                               </Avatar>
                            }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Stack 
                                direction={{ xs: 'column', sm: 'row'}} 
                                spacing = {{md: 2, xs: 1}}
                                divider={<Divider orientation="vertical" flexItem />}
                            >
                                <Box 
                                    sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}
                                >
                                    <Typography color='text.secondary' ><b>SYM  : </b>  {auto.sym} </Typography>
                                    <Typography color='text.secondary' ><b>AGE  : </b>  {auto.age} </Typography>
                                    <Typography color='text.secondary' ><b>TERR : </b>  {auto.terr} </Typography>
                                    <Typography color='text.secondary' ><b>CLASS: </b>  {auto.class} </Typography>
                                    <Typography color='text.secondary' ><b>PTS  : </b>  {auto.pts} </Typography> 
                                    <Typography color='text.secondary' ><b>SAFE : </b>  {auto.safe} </Typography> 
                                    <Typography color='text.secondary' ><b>TRNS : </b>  {auto.trns} </Typography> 
                                    <Typography color='text.secondary' ><b>REN  : </b>  {auto.ren} </Typography> 
                                    <Typography color='text.secondary' ><b>ATF  : </b>  {auto.atf} </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}
                                >
                                    <Typography color='text.secondary' ><b>FLCV : </b>  {auto.flcv} </Typography>
                                    <Typography color='text.secondary' ><b>VSRC : </b>  {auto.vsrc} </Typography>
                                    <Typography color='text.secondary' ><b>NOWN : </b>  {auto.nown} </Typography>
                                    <Typography color='text.secondary' ><b>DEFD : </b>  {auto.defd} </Typography>
                                    <Typography color='text.secondary' ><b>MC   : </b>  {auto.mc} </Typography> 
                                    <Typography color='text.secondary' ><b>AV   : </b>  {auto.av} </Typography> 
                                    <Typography color='text.secondary' ><b>SM   : </b>  {auto.sm} </Typography> 
                                    <Typography color='text.secondary' ><b>LGL  : </b>  {auto.lgl} </Typography> 
                                    <Typography color='text.secondary' ><b>ERS  : </b>  {auto.ers} </Typography>
                                </Box>
                            </Stack>                    
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </React.Fragment>
    )
}
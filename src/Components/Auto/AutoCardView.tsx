import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, Typography, Stack, Divider } from '@mui/material'

import { AutoValues } from '../../Scaffold/MGAValues';


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
                            title={auto.autoMake + ' ' + auto.autoModel + ' ' + auto.autoYear}
                            // add a subheader with "VIN: " and the auto.autoVIN value
                            subheader={'VIN: ' + auto.autoVIN}

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
                                    <Typography color='text.secondary' ><b>SYM  : </b>  {auto.autoSYM} </Typography>
                                    <Typography color='text.secondary' ><b>AGE  : </b>  {auto.autoAGE} </Typography>
                                    <Typography color='text.secondary' ><b>TERR : </b>  {auto.autoTERR} </Typography>
                                    <Typography color='text.secondary' ><b>CLASS: </b>  {auto.autoCLASS} </Typography>
                                    <Typography color='text.secondary' ><b>PTS  : </b>  {auto.autoPTS} </Typography> 
                                    <Typography color='text.secondary' ><b>SAFE : </b>  {auto.autoSAFE} </Typography> 
                                    <Typography color='text.secondary' ><b>TRNS : </b>  {auto.autoTRNS} </Typography> 
                                    <Typography color='text.secondary' ><b>REN  : </b>  {auto.autoREN} </Typography> 
                                    <Typography color='text.secondary' ><b>ATF  : </b>  {auto.autoATF} </Typography>
                                </Box>
                                <Box
                                    sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}
                                >
                                    <Typography color='text.secondary' ><b>FLCV : </b>  {auto.autoFLCV} </Typography>
                                    <Typography color='text.secondary' ><b>VSRC : </b>  {auto.autoVSRC} </Typography>
                                    <Typography color='text.secondary' ><b>NOWN : </b>  {auto.autoNOWN} </Typography>
                                    <Typography color='text.secondary' ><b>DEFD : </b>  {auto.autoDEFD} </Typography>
                                    <Typography color='text.secondary' ><b>MC   : </b>  {auto.autoMC} </Typography> 
                                    <Typography color='text.secondary' ><b>AV   : </b>  {auto.autoAV} </Typography> 
                                    <Typography color='text.secondary' ><b>SM   : </b>  {auto.autoSM} </Typography> 
                                    <Typography color='text.secondary' ><b>LGL  : </b>  {auto.autoLGL} </Typography> 
                                    <Typography color='text.secondary' ><b>ERS  : </b>  {auto.autoERS} </Typography>
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
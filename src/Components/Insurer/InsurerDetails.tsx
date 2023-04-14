import React from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import _ from 'lodash';

import { Paper, Grid, TextField, Divider, Typography } from '@mui/material';

import MailingAddressItem from '../MailingAddress/MailingAddressItem';


export default function InsurerDetails () {

    const { control, watch, formState, 
            formState: { errors } }
        = useFormContext();

    return (
            <Paper elevation={2} sx={{p:2, m:0}}>
                <Typography variant='h6' sx={{color: 'primary.main', p:1, m:1}} >Details</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3} >
                        <Controller
                            name="maxPolicyTerm"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="maxPolicyTerm" label="Max Policy Term  in Months"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.maxPolicyTerm}
                                    //@ts-ignore
                                    helperText={_.get(errors, 'maxPolicyTerm?.message', '')}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4} md={3} >
                        <Controller
                            name="minPolicyTerm"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="minPolicyTerm" label="Min Policy Term in Months"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.minPolicyTerm}
                                    //@ts-ignore
                                    helperText={errors.minPolicyTerm?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4} md={2} >
                        <Controller
                            name="renewalDaysAgent"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="renewalDaysAgent" label="Renewal Days - Agent"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.renewalDaysAgent}
                                    //@ts-ignore
                                    helperText={errors.renewalDaysAgent?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4} md={2} >
                        <Controller
                            name="renewalDaysDirectBill"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="renewalDaysDirectBill" label="Renewal Days - Direct Bill"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.renewalDaysDirectBill}
                                    //@ts-ignore
                                    helperText={errors.renewalDaysDirectBill?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={4} md={2} >
                        <Controller
                            name="statementType"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="statementType" label="Statement Type"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.statementType}
                                    //@ts-ignore
                                    helperText={errors.statementType?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={2} >
                        <Controller
                            name="NAICCode"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="NAICCode" label="NAIC Code"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.NAICCode}
                                    //@ts-ignore
                                    helperText={errors.NAICCode?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Controller
                            name="NAICGroup"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="NAICGroup" label="NAIC Group"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.NAICGroup}
                                    //@ts-ignore
                                    helperText={errors.NAICGroup?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} >
                        <Controller
                            name="NAICGroupName"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="NAICGroupName" label="NAIC Group Name"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.NAICGroupName}
                                    //@ts-ignore
                                    helperText={errors.NAICGroupName?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Controller
                            name="AMBestID"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="AMBestID" label="AM Best ID"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.AMBestID}
                                    //@ts-ignore
                                    helperText={errors.AMBestID?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Controller 
                            name="AMBestRating"
                            control={control}
                            render={({field}) => (
                                <TextField {...field}
                                    id="AMBestRating" label="AM Best Rating"
                                    variant="outlined" sx={{margin:1}} fullWidth
                                    error={!!errors.AMBestRating}
                                    //@ts-ignore
                                    helperText={errors.AMBestRating?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                            <Controller 
                                name="contactName"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="contact-name" label="Contact Name"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!errors.contactName}
                                        //@ts-ignore
                                        helperText={errors.contactName?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Controller 
                                name="phone"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="phone" label="Phone"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!errors.phone}
                                        //@ts-ignore
                                        helperText={errors.phone?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Controller
                                name="principalEmail"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="principalEmail" label="Principal Email"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!errors.principalEmail}
                                        //@ts-ignore
                                        helperText={errors.principalEmail?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Controller
                                name="website"
                                control={control}
                                render={({field}) => (
                                    <TextField {...field}
                                        id="website" label="Website"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!errors.website}
                                        //@ts-ignore
                                        helperText={errors.website?.message}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Divider sx={{margin:1}} />
                    <MailingAddressItem /> 
            </Paper>
    )
}

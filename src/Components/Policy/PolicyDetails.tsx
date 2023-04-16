import React from 'react';
import { useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid, TextField, Autocomplete, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PolicyDetails() {

    const { control, formState: { errors} } = useFormContext();

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="binderNumber"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="binder-number" label="Binder Number"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'binderNumber', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'binderNumber.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <Controller
                            name="binderTimeStamp"
                            control={control}
                            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                            <DatePicker 
                                {...field}
                                inputRef={ref}
                                label="Binder Timestamp"
                                renderInput={(inputProps) => (
                                    <TextField 
                                        {...inputProps}
                                        variant="outlined" fullWidth  sx={{ m: 1 }}
                                        error={!!_.get(errors, 'binderTimeStamp', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'binderTimeStamp.message', '')}
                                    />
                                    )}
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4} md={2} >
                    <Controller
                        name="billType"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="billType" label="Bill Type"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'billType', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'billType.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}  >
                    <Controller
                        name="netGross"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="net-gross" label="Net/Gross"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'netGross', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'netGross.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="paymentOption"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="payment-option" label="Payment Option"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'paymentOption', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'paymentOption.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="claimCount"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="claim-count" label="Claim Count"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'claimCount', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'claimCount.message', '')}
                            />
                        )}
                    />
                </Grid>                
                <Grid item xs={4} md={2}>
                    <Controller
                        name="policyRateType"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="policy-rate-type" label="Policy Rate Type"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'policyRateType', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'policyRateType.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="policyTerm"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="policy-term" label="Policy Term"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'policyTerm', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'policyTerm.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumInforce"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-inforce" label="Premium Inforce"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumInforce', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumInforce.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumInforce"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-inforce" label="Premium Inforce"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumInforce', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumInforce.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="premiumWritten"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="premium-written" label="Premium Written"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'premiumWritten', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'premiumWritten.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="statementDate"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="statement-date" label="Statement Date"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'statementDate', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'statementDate.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="territory"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="territory" label="Territory"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'territory', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'territory.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={2}>
                    <Controller
                        name="yearsRenewed"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="years-renewed" label="Years Renewed"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'yearsRenewed', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'yearsRenewed.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
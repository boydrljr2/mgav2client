import React from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid, Autocomplete, TextField, Button } from '@mui/material';
import { OPERATORTYPES, SR22S } from '../Scaffold/MGAValues';

export default function OperatorDetails () {

    const { control, formState, formState: {errors } } = useFormContext();

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                    <Controller
                        name={`operators[0].number`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-number" label="Number"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'operators[0].number', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'operators[0].number.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6} md={8} >
                    <Controller
                        name={`operators[0].name`}
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-name" label="Name"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'operators[0].name', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'operators[0].name.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Controller 
                        name={`operators[0].type`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="status" 
                                options={OPERATORTYPES}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="Type"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'operators[0].type', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'operators[0].type.message', '')}
                                    />
                                }
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Controller 
                        name={`operators[0].sr22`}
                        control={control}
                        render={({field}) => (
                            <Autocomplete {...field}
                                id="status" 
                                options={SR22S}
                                getOptionLabel={(option) => option.label}
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                onChange={( event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                renderInput={(field) => 
                                    <TextField 
                                        {...field} 
                                        label="SR22"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'operators[0].sr22', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'operators[0].sr22.message', '')}
                                    />
                                }
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useFormContext, Controller } from 'react-hook-form';
import _ from 'lodash';

import { Paper, Grid, TextField, Button } from '@mui/material';

import { OperatorValues } from '../Scaffold/MGAValues';

export default function OperatorPolicyList () {

    const { watch, control, formState: {errors } } = useFormContext();
    const operators = watch('operators');
    console.log('operators', operators)
    console.log('errors', errors)

    return (
        <React.Fragment>
            {operators.map((operator : OperatorValues, index : number, key : number) => (
                <Paper variant="outlined" sx={{margin:1}} >
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4}>
                            <Controller
                                name={`operators[${index}].number`}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        id="operator-number" label="Number"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'operator.number', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'operator.number.message', '')}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Controller
                                name={`operators[${index}].name`}
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        id="operator-name" label="Name"
                                        variant="outlined" sx={{margin:1}} fullWidth
                                        error={!!_.get(errors, 'operator.name', null)}
                                        //@ts-ignore
                                        helperText={_.get(errors, 'operator.name.message', '')}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={2}
                        sx={{margin:'auto', justifyContent:"flex-end"}}
                    >
                        <Grid item >
                            <Button
                                variant="contained" size='medium'
                                type="submit"
                            >Save
                            </Button>
                        </Grid>
                        <Grid item sx={{mr:1}}>
                            <Button
                                variant="outlined" size='medium'
                                component={Link} to='/policies'
                            >Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </React.Fragment>
    )
}

/*

    {operators.map((operator : OperatorValues, index : number) => (
        <Paper variant="outlined" sx={{margin:1}}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={4}>
                    <Controller
                        name="operator[${index}].number"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-number" label="Number"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'operator.number', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'operator.number.message', '')}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={4} md={4}>
                    <Controller
                        name="operator.name"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="operator-name" label="Name"
                                variant="outlined" sx={{margin:1}} fullWidth
                                error={!!_.get(errors, 'operator.name', null)}
                                //@ts-ignore
                                helperText={_.get(errors, 'operator.name.message', '')}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </Paper>
    ))}

*/
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import _ from 'lodash';

import { Toolbar, Grid, Button, Typography } from '@mui/material';

import OperatorItem from './OperatorItem';


// ------ Operator Panel Function component ------
export default function OperatorPolicyPanel () {

    const { control, formState: { errors, dirtyFields } } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "operators"
    });

    return (
        <React.Fragment>
            <Toolbar  variant='regular'  sx={{flexGrow: 1,}} >
                <Grid container direction="row" spacing={2}
                    sx={{margin:'auto', justifyContent:"flex-end"}}
                >   
                    <Grid item sx={{mr:1}}>
                        <Typography variant='subtitle1' sx={{color: 'primary.main'}}>
                            Operator Panel Toolbar: Panel buttons, User messages, nav breadcrumbs, etc.
                        </Typography>
                    </Grid>
                    <Grid item sx={{mr:1}}>
                        <Button
                            variant="outlined" size='medium' color='primary'
                            type="submit" 
                        >Append
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>

            {fields.map((item, index ) => (
                <OperatorItem  item={item}  index={index} control={control} />
            ))}
        

        </React.Fragment>
    )
}
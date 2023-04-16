import React from 'react';
import { useFieldArray, useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Toolbar, Grid, Button, Typography } from '@mui/material';

import OperatorItem from './OperatorItem';


// ------ Operator Panel Function component ------
export default function OperatorPolicyPanel () {

    const { control, formState: { errors} } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "operators"
    });

    return (
        <React.Fragment>
            <Toolbar
                variant='regular'
                sx={{flexGrow: 1,}}
            >
                <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, color:'primary.main' }}> 
                    Operators
                </Typography>
                <Grid container direction="row" spacing={2}
                    sx={{margin:'auto', justifyContent:"flex-end"}}
                >
                    <Grid item sx={{mr:1}}>
                        <Button
                            variant="outlined" size='medium' color='primary'
                            type="submit" 
                        >Append
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>

            {fields.map((item, index) => (
                <OperatorItem  item={item}  index={index}  control={control} />
            ))}
        

        </React.Fragment>
    )
}
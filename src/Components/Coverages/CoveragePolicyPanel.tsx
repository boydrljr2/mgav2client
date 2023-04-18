import React from 'react';
import { useFieldArray, useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Paper, Toolbar, Grid, Button, Typography, TextField } from '@mui/material';

//---------- Coverage Panel Function component ----------
export default function CoveragePolicyPanel () {

    
    return (
        <React.Fragment>
            <Toolbar  variant='regular' sx={{flexGrow: 1, size:'fullWidth'}} >
                <Grid container direction="row" spacing={2}
                    sx={{margin:'auto', justifyContent:"flex-end"}}
                >
                    <Grid item sx={{mr:1}}>
                        <Typography variant='subtitle1'  sx={{color: 'primary.main'}}>
                            Coverage Panel Toolbar: Panel buttons, User messages, nav breadcrumbs, etc.
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

        </React.Fragment>
    )
}
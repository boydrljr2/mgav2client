import React from 'react';
import { useFieldArray, useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Paper, Toolbar, Grid, Button, Typography, TextField } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import AutoTable from './AutoTable';

//---------- Auto Policy Panel Function component ----------
export default function AutoPolicyPanel () {

    const { control, formState: { errors, dirtyFields } } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "autoUnits"
    });
    
    return (
        <React.Fragment>

            {/* Create a fullWidth Toolbar */}
            <Toolbar
                variant='regular'
                sx={{flexGrow: 1,}}
            >
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


            <AutoTable />

        </React.Fragment>
    )
}

/* 
    {fields.map((item, index ) => (
                <Paper variant="outlined" sx={{width: '100%', margin:'auto', justifyContent:"flex-end"}} key={item.id}>
                    <Grid container direction="row" spacing={2} >
                        <Grid item xs={12} sx={{mr:1}}>
                            <Controller 
                                name={`autoUnits.${index}.unit`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="auto-unit-number" label="Unit"
                                        variant="outlined" fullWidth sx={{m:1}}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            ))}
*/

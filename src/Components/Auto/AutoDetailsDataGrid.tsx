import React from 'react';
import { useFieldArray, useFormContext,  Controller } from 'react-hook-form';
import _ from 'lodash';

import { Grid  } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

//---------- Auto Policy Panel Function to show Auto Details in DG component - not very useful ----------//
export default function AutoDetailsDataGrid() {

    const { control, formState: { errors, dirtyFields } } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "autoUnits"
    });

    //set 'rows' equal to the 'autoUnits' array
    const rows = fields;

    const columns: GridColDef[] = [
        {field: 'unit', headerName: 'Unit', width: 50},
        {field: 'make', headerName: 'Make', width: 100, editable: true},
        {field: 'model', headerName: 'Model', width: 200, editable: true},
        {field: 'year', headerName: 'Year', width: 75, editable: true},
        {field: 'vin', headerName: 'VIN', width: 200, editable: true},
        {field: 'sym', headerName: 'SYM', width: 50, editable: true},
        {field: 'age', headerName: 'AGE', width: 50, editable: true},
        {field: 'terr', headerName: 'TERR', width: 50, editable: true},
        {field: 'class', headerName: 'CLASS', width: 50, editable: true},
        {field: 'pts', headerName: 'PTS', width: 50, editable: true},
        {field: 'safe', headerName: 'SAFE', width: 50, editable: true},
        {field: 'trns', headerName: 'TRNS', width: 50, editable: true},
        {field: 'ren', headerName: 'REN', width: 50, editable: true},
        {field: 'atf', headerName: 'ATF', width: 50, editable: true},
        {field: 'flcv', headerName: 'FLCV', width: 50, editable: true},
    ];
    
    return (
        <React.Fragment>
            <Grid container direction="row" spacing={2} sx={{ width: '100%' }}>
                <Grid item xs={12} sx={{ minHeight: 400, width: 1300}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

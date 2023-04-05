import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';


export default function EditButtons(){    

    return (
        <Grid container direction="row" spacing={2}
        sx={{margin:'auto', justifyContent:"flex-end"}}
        >
            <Grid item >
                <Button
                    variant="contained" size='medium'
                    type="submit"
                >Save</Button>
            </Grid>
            <Grid item sx={{mr:1}}>
                <Button
                    variant="outlined" size='medium'
                    component={Link} to={'/home'}
                >Cancel</Button>
            </Grid>
        </Grid>
    );
}
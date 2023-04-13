import React from 'react';

import { Toolbar, Box, Button, Typography } from '@mui/material';
import OperatorPolicyList from './OperatorPolicyList';


// ------ Operator Panel Function component ------
export default function OperatorPolicyPanel () {

    return (
        <React.Fragment>
            <Toolbar variant='regular' sx={{flexGrow:1}}>
                <Box 
                    sx={{flexGrow:1, justifyContent:"right"}}>
                    <Button  variant="contained" size="small"  
                    sx={{ color:'primary',  display: 'block', mr:2}} 
                >
                        Add
                    </Button>
                </Box>
            </Toolbar>
        
            <OperatorPolicyList />

        </React.Fragment>
    )
}
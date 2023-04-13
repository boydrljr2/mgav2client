import React, { useContext} from 'react';

import { useFormContext  } from 'react-hook-form';
import _  from 'lodash';

import { Toolbar, Box, Button, Typography } from '@mui/material';
import OperatorTable from './OperatorTable';


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
        
            <OperatorTable />

        </React.Fragment>
    )
}
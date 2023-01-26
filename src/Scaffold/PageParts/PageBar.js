import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Toolbar, Button, Box  } from '@mui/material';

//TO DO: Change this file to a TypeScript file and add type definitions for the props
//TO DO: Add a prop for the pageButtons array. This will be an array of objects with the following properties:
//          name: string
//          link: string
//TO DO: Add a prop for the title string 


export default function PageBar(props) {

    //use makeButtons as a switch to determine whether to render the pageButtons in the return statement or not.
    const makeButtons = (props.pageButtons[0].name !== undefined);

    return (
        <>
            {/* Toolbar for xs & sm screen */}
            <Toolbar 
                variant="dense"
                sx={{
                    display: {xs: 'flex', md:'none'}
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ color: 'primary.main' }}
                >
                    {props.title}
                </Typography>
                {/* wrap the Box statement in a conditional statement */}
                {makeButtons && (
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        justifyContent:'right'
                    }}>
                        {props.pageButtons.map((button) => (
                            <Button
                                key={button.name}
                                variant="outlined"
                                size="small"
                                component={Link}
                                to={`/${button.link.toLowerCase()}`}    
                                sx={{
                                    color:'primary', 
                                    display: 'block',
                                    mr:2,
                                    '&:hover': {
                                        color: 'white',
                                        backgroundColor: 'primary.main',
                                    } }}
                            >
                                {button.name}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        

        
            {/* PageTitle for md and larger screen */}
            <Toolbar 
                variant="regular"
                sx={{
                    display: {xs: 'none', md:'flex'} 
                }}
            >
                <Typography 
                    variant="h5"
                    sx={{ color: 'primary.main' }}
                >
                        {props.title}
                </Typography>
                {/* wrap the Box statement in a conditional statement */}
                {makeButtons && (
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' }, 
                        justifyContent:'right' 
                    }}>
                        {props.pageButtons.map((button) => (
                            <Button
                                key={button.name}
                                variant="outlined"
                                size="medium"
                                component={Link}
                                to={`/${button.link.toLowerCase()}`}    
                                sx={{
                                    color:'primary', 
                                    display: 'block',
                                    mr:2,
                                    '&:hover': {
                                        color: 'white',
                                        backgroundColor: 'primary.main',
                                    } }}
                            >
                                {button.name}
                            </Button>
                        ))}                        
                    </Box>
                )}
            </Toolbar>
        </>
    )
}

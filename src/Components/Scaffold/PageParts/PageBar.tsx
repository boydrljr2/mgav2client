import React from 'react'

import { Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { PageBarValues } from './PageValues'

export default function PageBarNew(pageBarProps : PageBarValues | undefined ) {

    if (pageBarProps === undefined) {
        return (
            <div>No PageBarProps</div>
        )
    }

    const { title, pageButtons } = pageBarProps
    const makeButtons = (pageButtons !== undefined )

    return (
        <React.Fragment>
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
                >{title} 
                </Typography>

                {/* wrap the Box statement in a conditional statement */}
                {makeButtons && (
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        justifyContent:'right'
                    }}>
                        {pageButtons.map((button) => (
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
                                }}
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
                >{title}
                </Typography>

                {/* wrap the Box statement in a conditional statement */}
                {makeButtons && (
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' }, 
                        justifyContent:'right' 
                    }}>
                        {pageButtons.map((button) => (
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
                                }}
                            >
                                {button.name}
                            </Button>
                        ))}                        
                    </Box>
                )}
            </Toolbar>
        </React.Fragment>
    )
}

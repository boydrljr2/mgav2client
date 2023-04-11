import React from 'react'

import { Box, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
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

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    border: `1px solid ${alpha(theme.palette.primary.dark, 0.5)}`,
                },
            },
        },
    }));


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
                sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'} }}
            >
                <Typography 
                    variant="h5" noWrap
                    component="div"
                    sx={{ flexGrow: 1, color: 'primary.main' }}
                >{title}
                </Typography>

{/*
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </Search>
*/}

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

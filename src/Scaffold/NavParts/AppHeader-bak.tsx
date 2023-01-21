import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
//import AdbIcon from '@mui/icons-material/Adb';
import {useTheme, Theme} from '@mui/material/styles';

//@ts-ignore
import logo from './MGABSlogo.png';


const themedStyles = (theme: Theme) => {
    return {
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        }
    }
}

export default function AppHeader() {

    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleUserMenuClose = () => {
        setAnchorEl(null);
      };

    return (
        // the themedStyles can be removed once the nav options are in the toolbar and drawer is removed
        <AppBar position="fixed" sx={themedStyles(theme).appBar} >
            <Container maxWidth="lg">
                <Toolbar>
                    {/* <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 2}}/> */}
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        {/* <Link to ="/">
                            <img src={logo} style={{height:'80px', margin:'0' }} alt='MGABS Logo'  />
                        </Link> */}

                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                        MGA System
                    </Typography>
                                

                    <Box sx={{ flexGrow: 0}}>
                        <Tooltip title="Login | SignUp">
                            <IconButton
                                size="medium"
                                aria-label="account of current user"
                                aria-controls="account-menu-appbar"
                                aria-haspopup="true"
                                onClick={handleUserMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="account-menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{vertical:'top', horizontal:'right'}}
                            keepMounted
                            transformOrigin={{vertical:'top', horizontal:'right'}}
                            sx={{mt:5}}
                            open={Boolean(anchorEl)}
                            onClose={handleUserMenuClose}
                        >
                            <MenuItem >SignUp</MenuItem>
                            <MenuItem >Login</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
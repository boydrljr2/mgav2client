import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useTheme, Theme} from '@mui/material/styles';

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
        <AppBar position="fixed" sx={themedStyles(theme).appBar} >
            <Toolbar>
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 4}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    Managing General Agent System
                </Typography>
                <div>
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
                </div>

            </Toolbar>

        </AppBar>
    )
}
import * as React from 'react';
import { Link } from 'react-router-dom';
//import { useTheme, Theme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

//@ts-ignore
import logo from './K1logo192.png';

/* Disconnected themed styles because navdrawer was removed and therefore zIndex is no longer needed.
const themedStyles = (theme: Theme) => {
    return {
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        }
    }
}
*/

const allPages = ['Agencies', 'Insurers', 'Products', 'Policies', 'Users', 'Mailing'];
const mainPages = ['Agencies', 'Insurers', 'Products', 'Policies'];
const minorPages = ['Users', 'Mailing'];

//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings = ['Login', 'Register'];

function ResponsiveAppBar() {

    //const theme = useTheme();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

            {/* Medium sized and up version of the AppHeader starts here. */}
            {/* Logo and System Name */}
            <Box
                sx={{
                    ml: 0, mr:0, mt:0, mb:0,
                    display: {xs: 'none', md:'flex'},
                    alignItems: 'center'
                }}
            >
                <Button 
                    color="inherit"
                    component={Link}
                    to="/" 
                >
                    <img src={logo} style={{height:'50px'}} alt="MGA Logo" /> 
                </Button>

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontSize:'1.5rem',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    MGA System
                </Typography>
            </Box>

            {/* Main Pages horizontal menu*/}
            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'right', 
                mr: 2}}
            >
                {mainPages.map((page) => (
                    <Button
                        key={page}
                        component={Link}
                        to={`/${page.toLowerCase()}`}
                        onClick={handleCloseNavMenu}
                        sx={{color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>

            {/* Minor-Admin Pages dropdown menu.  */}
            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }, 
                justifyContent:'right' }}
            >
                <Tooltip title="Admin Pages">
                    <IconButton 
                        size="medium"
                        aria-label="all pages menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ p: 0, mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>

                <Menu
                    id="minor-menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'none', md: 'block' },                       
                    }}
                >
                    {minorPages.map((page) => (
                        <MenuItem 
                            key={page} 
                            component={Link} 
                            to={`/${page.toLowerCase()}`} 
                            onClick={handleCloseNavMenu}
                            color="inherit"
                        >
                            {page}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

            {/* This is the sm and xs sized version of the header. */}
            {/* Just System Name. No logo */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    MGA System
                </Typography>
            </Box>

            {/* All Pages drop down menu */}
            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: 'flex', md: 'none' }, 
                justifyContent:'right' }}
            >
                <Tooltip title="All Pages">
                    <IconButton 
                        size="medium"
                        aria-label="all pages menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ p: 0, mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>

                <Menu
                    id="all-menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        justifyContent: 'right'
                    }}
                >
                    {allPages.map((page) => (
                        <MenuItem 
                            key={page} 
                            component={Link} 
                            to={`/${page.toLowerCase()}`} 
                            onClick={handleCloseNavMenu}
                            color="inherit"
                        >
                            {page}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>


            {/* The Account authentication and settings menu appears in all sizes. */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Login | Register">
                    <IconButton 
                        onClick={handleOpenUserMenu} 
                        sx={{ p: 0 }}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="account-menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem 
                            key={setting} 
                            component={Link}
                            to={`/${setting.toLowerCase()}`}
                            onClick={handleCloseUserMenu}
                        >
                            {setting}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
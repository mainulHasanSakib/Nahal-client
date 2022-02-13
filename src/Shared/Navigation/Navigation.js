import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';

import logo from '../../Images/logo.jpg'



const Navigation = () => {
  const { user, logoutUser } = UseAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
  
    <AppBar position="sticky" color="secondary"  >
    <Container maxWidth="xl" >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        > 
          <img style={{width:'50px', height:'50px', borderRadius:'15px'} } src={logo} alt="NAHAL" /> 
      </Typography> 

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
              
            
              <MenuItem onClick={handleCloseNavMenu}>
                               <NavLink style={{ textDecoration: 'none', color: 'purple' }} to="/">
                                    <Button variant="light">Home</Button>
                                </NavLink>
                                <br/>
                              
              </MenuItem>
          
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
         <Button variant="light">Home</Button>
          </NavLink>
       
         
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleOutlinedIcon sx={{ fontSize: 40, color:'white' }}/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
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
            
              <MenuItem  onClick={handleCloseUserMenu}>


              {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="secondary">Dashboard</Button>
                                </NavLink> <br/>
                                <Button onClick={logoutUser} variant="light">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="secondary">Login</Button>
                            </NavLink>
                    }

                 
                            
              </MenuItem>
           
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
   
    
  );
};
export default Navigation;

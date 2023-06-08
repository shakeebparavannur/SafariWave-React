import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { userContext } from '../App';

const Navbar = () => {
    const {isUserLoggedIn,setIsUserLoggedIn} = useContext(userContext)
    useEffect(() => {
        const jwtToken = Cookies.get('jwtToken');
        setIsUserLoggedIn(jwtToken !== undefined);
      }, []);
    const Logout = () => {
        Cookies.remove('jwtToken')
        setIsUserLoggedIn(false);
    }
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Safari Wave
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            <Typography variant="subtitle1">
              Home
            </Typography>
          </Link>
          <Link to="/packages" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            <Typography variant="subtitle1">
              Packages
            </Typography>
          </Link>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            <Typography variant="subtitle1">
              Services
            </Typography>
          </Link>
          {isUserLoggedIn ? (
            <>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
              <Typography variant="subtitle1">
                Profile
              </Typography>
            </Link>
            <Link onClick={Logout} style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
              <Typography variant="subtitle1">
                Logout
              </Typography>
            </Link>
            <Link to="/booking" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            <Typography variant="subtitle1">
              Booking
            </Typography>
          </Link>
            </>
          ) : (
            <>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
              <Typography variant="subtitle1">
                Login
              </Typography>
            </Link>
            <Link to="/signup" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
              <Typography variant="subtitle1">
                Signup
              </Typography>
            </Link>
            </>
            
          )}
          
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
            <Typography variant="subtitle1">
              Contact Us
            </Typography>
          </Link>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'inherit' }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

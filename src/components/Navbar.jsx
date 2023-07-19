import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo-tran-white-high.png";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";

import { userContext } from "../App";
import "./Navbar.css";

const pages = ["Packages", "Services", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
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
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(userContext);
  useEffect(() => {
    const jwtToken = Cookies.get("jwtToken");
    setIsUserLoggedIn(jwtToken !== undefined);
  }, []);
  const Logout = () => {
    Cookies.remove("jwtToken");
    setIsUserLoggedIn(false);
  };

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#131A2F", margin: "auto" }}
    >
      <Container maxWidth="xl" sx={{ position: "sticky" }}>
        <Toolbar disableGutters>
          <div className="logo-div">
            <img src={logo} alt="" className="logo-png" />
          </div>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Safari Wave
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link
                  to="/package"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "16px",
                  }}
                >
                  <Typography textAlign="center">Packages</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/services"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "16px",
                  }}
                >
                  <Typography textAlign="center">Services</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/contact"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "16px",
                  }}
                >
                  <Typography textAlign="center">Contact Us</Typography>
                </Link>
              </MenuItem>
              {isUserLoggedIn && (
                <MenuItem>
                  <Link
                    to="/booking"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "16px",
                    }}
                  >
                    <Typography textAlign="center">Bookings</Typography>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Safari Wave
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              to="/package"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "66px",
                marginRight: "16px",
              }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Packages
              </Button>
            </Link>
            <Link
              to="/services"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "66px",
                marginRight: "16px",
              }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Services
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "66px",
                marginRight: "16px",
              }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact us
              </Button>
            </Link>
            {isUserLoggedIn && (
              <Link
                to="/booking"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "66px",
                  marginRight: "16px",
                }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Bookings
                </Button>
              </Link>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isUserLoggedIn ? (
                <>
                  <MenuItem>
                  <Link to=""
                  style={{textDecoration:"none",color: "black",}}>
                    <Typography textAlign="center">Profile</Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                  <Link onClick={Logout}
                  style={{textDecoration:"none",color: "black",}}>
                    <Typography textAlign="center">Logout</Typography>
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                  <Link to="/login"
                  style={{textDecoration:"none",color: "black",}}>
                    <Typography textAlign="center">Login</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                  <Link to="/signup"
                  style={{textDecoration:"none",color: "black",}}>
                    <Typography textAlign="center">SignUp</Typography>
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

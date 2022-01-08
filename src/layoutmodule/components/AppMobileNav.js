import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NavAnchorLink from "./NavAnchorLink";

const AppMobileNav = () => {
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
    <AppBar position="static">
      <Toolbar disableGutters>
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
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <NavAnchorLink
                linkText="About"
                linkUrl="/aboutus"
                linkColor="rgba(0, 0, 0, 0.87)"
                linkVariant="body1"
                textAlign="center"
              />
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <NavAnchorLink
                linkText="Contact"
                linkUrl="/contactus"
                linkColor="rgba(0, 0, 0, 0.87)"
                linkVariant="body1"
                textAlign="center"
              />
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <NavAnchorLink
                linkText="View Products"
                linkUrl="/viewproducts"
                linkColor="rgba(0, 0, 0, 0.87)"
                linkVariant="body1"
                textAlign="center"
              />
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <NavAnchorLink
                linkText="Sign Up"
                linkUrl="/signup"
                linkColor="rgba(0, 0, 0, 0.87)"
                linkVariant="body1"
                textAlign="center"
              />
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ display: { md: "none" } }}
            >
              <NavAnchorLink
                linkText="Login"
                linkUrl="/login"
                linkColor="rgba(0, 0, 0, 0.87)"
                linkVariant="body1"
                textAlign="center"
              />
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          MEDICARE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppMobileNav;

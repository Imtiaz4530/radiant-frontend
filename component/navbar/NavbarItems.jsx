"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Logout, ShoppingBasketOutlined } from "@mui/icons-material";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useIsLoggedIn, useLogout } from "@/hooks/useAuth";
import { useStoreState } from "easy-peasy";

const NavIcon = dynamic(() => import("./NavIcon"), { ssr: false });

const NavbarItem = () => {
  const { item } = useStoreState((state) => state.cart);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const { logged, setLogged } = useIsLoggedIn();
  const { handleLogout } = useLogout(setLogged);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLogoutFunc = () => {
    handleLogout();
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {" "}
      <Link href={"/private/profile"} className="mblink profileButton">
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={item.length} color="error">
            <ShoppingBasketOutlined />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleLogoutFunc}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <Logout />
          </Badge>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#31363F",
          padding: { xs: 0, sm: "0 100px" },
          height: "45px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Link href="/" className="link">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                letterSpacing: 5,
              }}
            >
              RADIANT
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {/* NAVICON COMING HERE */}
          <NavIcon
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            setMobileMoreAnchorEl={setMobileMoreAnchorEl}
            logged={logged}
            handleLogout={handleLogout}
            item={item}
          />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default NavbarItem;

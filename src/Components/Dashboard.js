import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import { TbTags } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting, AiOutlineLike } from "react-icons/ai";
import { PiUsersBold } from "react-icons/pi";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import image from "../assests/image 1.png";
import icon1 from "../assests/Vector (2).png";
import icon2 from "../assests/total_transactions_icon.png";
import Charts from "./Charts";
import { Avatar } from "@mui/material";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "2rem",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
    marginRight: theme.spacing(2),
    marginLeft: "1rem",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: "10%",
      width: "auto",
    },

    [theme.breakpoints.up("xl")]: {
      marginLeft: "60%",
      width: "12rem",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "8rem",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><PieChartSharpIcon></PieChartSharpIcon>&nbsp; Dashboard</MenuItem>
      <MenuItem onClick={handleLogout}> <LogoutIcon></LogoutIcon>&nbsp; Logout</MenuItem>
    </Menu>
  );

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
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <PieChartSharpIcon></PieChartSharpIcon>
        </IconButton>
        <p>DashBoard</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <TbTags></TbTags>
        </IconButton>
        <p>Transactions</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <FaBusinessTime></FaBusinessTime>
        </IconButton>
        <p>Schedules</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <BiUserCircle></BiUserCircle>
        </IconButton>
        <p>Users</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <AiOutlineSetting></AiOutlineSetting>
        </IconButton>
        <p>Settings</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar
            src={image}
            style={{ width: "1.5rem", height: "1.5rem" }}
            alt="userimage"
          ></Avatar>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <InfoSharpIcon></InfoSharpIcon>
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ContactPageSharpIcon></ContactPageSharpIcon>
        </IconButton>
        <p>Contact Us</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          
        >
          <LogoutIcon></LogoutIcon>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h1 style={{ marginTop: "2rem" }}>Board.</h1>

        <div className="options">
          <div className="dashboard">
            <div className="icon">
              <PieChartSharpIcon sx={{ color: "white" }}></PieChartSharpIcon>
            </div>
            &nbsp; &nbsp; &nbsp;{" "}
            <span className="active" style={{ fontSize: "1.2rem" }}>
              Dashboard
            </span>{" "}
          </div>

          <div className="transactions">
            {" "}
            <div className="icon">
              <TbTags style={{ fontSize: "1.4rem" }}></TbTags>
            </div>
            &nbsp;&nbsp; &nbsp;{" "}
            <span style={{ fontSize: "1.2rem" }}>Transactions</span>
          </div>
          <div className="schedules">
            <div className="icon">
              <FaBusinessTime style={{ fontSize: "1.4rem" }}></FaBusinessTime>
            </div>
            &nbsp;&nbsp; &nbsp;{" "}
            <span style={{ fontSize: "1.2rem" }}>Schedules</span>
          </div>

          <div className="user">
            <div className="icon">
              <BiUserCircle style={{ fontSize: "1.4rem" }}></BiUserCircle>
            </div>
            &nbsp;&nbsp; &nbsp;{" "}
            <span style={{ fontSize: "1.2rem" }}>Users</span>
          </div>

          <div className="settings">
            <div className="icon">
              <AiOutlineSetting
                style={{ fontSize: "1.3rem" }}
              ></AiOutlineSetting>
            </div>
            &nbsp;&nbsp; &nbsp;{" "}
            <span style={{ fontSize: "1.2rem" }}>Settings</span>
          </div>
        </div>

        <div className="options2-cont">
          <div className="help">Help</div>
          <div className="contact">Contact Us</div>
        </div>
      </div>

      <div className="main-dashboard">
        <div className="header">
          <Box sx={{ flexGrow: 2, margin: "2rem 0"}}>
            <AppBar position="static" elevation={0} sx={{background: "#dcdde1"}}>
              <Toolbar sx={{ color: "black" }}>
                <h3>Dashboard</h3>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>

                  <StyledInputBase
                    
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  >
                    {" "}
                  </StyledInputBase>
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <IconButton
                    size="large"
                    aria-label="show new notifications"
                    color="inherit"
                  >
                    <Badge color="error">
                      <NotificationsNoneIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    sx={{ width: "2rem" }}
                    aria-label="account of current user"
                    aria-controls={menuId}
                    color="inherit"
                    onClick={handleProfileMenuOpen}
                  >
                    <Avatar
                      src={image}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "2rem",
                      }}
                      alt="userimage"
                    ></Avatar>
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </Box>
        </div>

        <div className="data-boxes">
          <div className="data-box box1">
            <div className="icon">
              <img src={icon1} alt="total revenue"></img>
            </div>
            <div className="data">
              <h6 style={{ marginBottom: "0" }}>Total Revenues</h6>
              <h4 style={{ marginTop: "0" }}> $2,129,430</h4>
            </div>
          </div>
          <div className="data-box box2">
            <div className="icon">
              <img src={icon2} alt="total revenue"></img>
            </div>
            <div className="data">
              <h6 style={{ marginBottom: "0" }}>Total Revenues</h6>
              <h4 style={{ marginTop: "0" }}> $2,129,430</h4>
            </div>
          </div>

          <div className="data-box box3">
            <div className="icon">
              <AiOutlineLike style={{ fontSize: "2rem" }}></AiOutlineLike>
            </div>
            <div className="data">
              <h6 style={{ marginBottom: "0" }}>Total Revenues</h6>
              <h4 style={{ marginTop: "0" }}> $2,129,430</h4>
            </div>
          </div>

          <div className="data-box box4">
            <div className="icon">
              <PiUsersBold style={{ fontSize: "2rem" }}></PiUsersBold>
            </div>
            <div className="data">
              <h6 style={{ marginBottom: "0" }}>Total Revenues</h6>
              <h4 style={{ marginTop: "0" }}> $2,129,430</h4>
            </div>
          </div>
        </div>

        <Charts></Charts>
      </div>
    </div>
  );
}

export default Dashboard;

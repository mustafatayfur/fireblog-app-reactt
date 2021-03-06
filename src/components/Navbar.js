import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Logo from "../assets/Weight-loss-blogs.jpg";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2), 
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "system-ui",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  appBar: {
    backgroundColor: "#2167bb",
  },
  logo: {
    width: 110,
    height: 80,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },

  login: {
    padding: 10,
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [newUid, setNewUid] = useState()
  

  //!Just for testing purpose
  // currentUser = {
  //   email: "a@gmailcom",
  // };

  console.log(currentUser);

  const handleCurrentUser = ()=> {
    const {uid} = currentUser
    if(currentUser !== null){
      setNewUid(uid)
    }
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };
  const handleDashboard = () => {
    setAnchorEl(null);
    navigate("/");
  };
  const handleProfile = (id) => {
    navigate(`/profile/${id}`);
    handleCurrentUser();
    handleClose();
  };


  return (
    
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDashboard}
          >
            <Avatar src={Logo} alt="logo" className={classes.logo} />
          </IconButton>
          <div className={classes.root}>
            <Link to="/" className={classes.login}>
              <Typography variant="h6" className={classes.title}>
                FIREBLOG  APP
              </Typography>
            </Link>
          </div>
            <Typography>
              {currentUser ? currentUser.email : ''}
            </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ fontSize: "40px" }} />
            </IconButton>
            {currentUser?.email ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to={`/profile/${newUid}`} className={classes.linkStyle}>
                  <MenuItem onClick={()=> handleProfile(newUid)}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
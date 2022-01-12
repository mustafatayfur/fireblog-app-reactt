import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../helpers/firebase';
import { AuthContext } from '../contexts/AuthContext'
import blog from '../assets/blogpost.jpeg'

export default function MenuAppBar() {
  const { currentUser } = React.useContext(AuthContext) 
  console.log("NavbarCurrentUser :",currentUser)
  // const [displayToggle, setDisplayToggle] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
     
      <AppBar position="static" sx={{ height: 100 }}>
        <Toolbar>
        <Link to='/' sx={{ p: 0}}>
            <IconButton  sx={{ p: 0, height: 100 }}>
                    <Avatar sx={{ height: 90, width: 90 }} alt="blog" src={blog} />
            </IconButton>
              
        </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:4 }}>
            <h2>TayfurAcademy</h2>
          </Typography>
          {auth && (
            <div className='icon'>
              <h2>{currentUser.email}</h2>
              <IconButton
        
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ height: 50, width: 50 }} />
              </IconButton>
              
              <Menu
              sx={{ mt: '70px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              
              {!currentUser ? 
                <>
                <Link to='/login'>
                <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to='/register'>
                <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
                </>
                :
                <>
                <Link to='/profile'>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to='/new-blog'>
                <MenuItem onClick={handleClose}>New</MenuItem>
                </Link>
                <Link to='/login'>
                <MenuItem onClick={()=> logOut()}>Logout</MenuItem>
                </Link>
                </>
                
              }
                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

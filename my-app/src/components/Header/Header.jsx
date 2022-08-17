import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { changeModalState, logOut } from '../../redux/actions';

import './Header.css';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
  };

  const openModal = (type) => {
    dispatch(changeModalState({
      status: true,
      type,
    }));
  };

  return (
    <div className="boxStyle">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar bgcolor="#9a1750">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            />
            <Typography className="news" variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClick}>
              News
            </Typography>
            {isLoggedIn
              ? <Button color="inherit" onClick={handleLogOut}>LogOut</Button>
              : (
                <>
                  <Button color="inherit" onClick={() => openModal('signup')}>Sign Up</Button>
                  <Button color="inherit" onClick={() => openModal('login')}>Login</Button>
                </>
              )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default memo(Header);

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { changeModalState } from '../../redux/actions';

function Header() {
  const dispatch = useDispatch();
  const openModal = (type) => {
    dispatch(changeModalState({
      status: true,
      type,
    }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={() => openModal('signup')}>Sign Up</Button>
          <Button color="inherit" onClick={() => openModal('login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);

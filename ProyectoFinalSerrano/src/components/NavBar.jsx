import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button component={Link} to="/">Inicio</Button>
        <Button component={Link} to="/cart">Carrito</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

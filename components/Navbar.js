import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            EcoConnect
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/reels">
            Reels
          </Button>
          <Button color="inherit" component={Link} to="/eco-challenge">
            Eco Challenge
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

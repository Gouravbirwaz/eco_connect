import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.jpeg';

function Navbar({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUploadPageRedirect = () => {
    navigate('/record-reel'); // Redirect to the new recording page
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <Container sx={styles.container}>
          <div sx={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
          </div>

          <div sx={styles.navButtons}>
            <Button color="inherit" component={Link} to="/dashboard" sx={styles.button}>
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/reels" sx={styles.button}>
              Reels
            </Button>
            <Button color="inherit" component={Link} to="/eco-challenge" sx={styles.button}>
              Eco Challenge
            </Button>
            <Button color="inherit" component={Link} to="/profile" sx={styles.button}>
              Profile
            </Button>

            {/* Redirect to RecordReel page */}
            <Button color="inherit" sx={styles.uploadButton} onClick={handleUploadPageRedirect}>
              Upload Reel
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  appBar: {
    backgroundColor: '#388e3c', // Eco-friendly green color for the AppBar
    boxShadow: 'none', // Removing the shadow for a smooth appearance
    padding: '0 20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '60px', // Adjust the height as needed
    marginRight: '20px',
    borderRadius: '30%', // Space between logo and profile section
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: "'Nunito', sans-serif", // Clean, friendly font
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#2e7d32', // Slightly darker green for hover effect
    },
    marginLeft: '20px',
    fontFamily: "'Roboto', sans-serif", // Modern and readable font
  },
  uploadButton: {
    color: '#ffffff',
    backgroundColor: '#2e7d32', // Button background color
    '&:hover': {
      backgroundColor: '#388e3c', // Darker green on hover
    },
    marginLeft: '20px',
  },
  avatar: {
    backgroundColor: '#2e7d32', // Green background for the avatar
    cursor: 'pointer',
    marginRight: '10px',
  },
  email: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: '#f1f9f1', // Soft, nature-inspired background for the dropdown
  }
};


export default Navbar;

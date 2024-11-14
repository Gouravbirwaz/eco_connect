import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/back.jpg'; // Replace with the actual path to your logo image

// Custom hook to manage media permissions (camera, microphone)
const useMediaStream = () => {
  const [mediaStream, setMediaStream] = useState(null);

  const startMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream(stream);
    } catch (err) {
      console.error('Error accessing camera or microphone', err);
    }
  };

  const stopMediaStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    setMediaStream(null);
  };

  return { mediaStream, startMediaStream, stopMediaStream };
};

function Navbar({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const { mediaStream, startMediaStream, stopMediaStream } = useMediaStream();
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUploadDialogOpen = () => {
    setOpenUploadDialog(true);
    startMediaStream(); // Start the camera and mic when opening the dialog
  };

  const handleUploadDialogClose = () => {
    setOpenUploadDialog(false);
    stopMediaStream(); // Stop the camera and mic when closing the dialog
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <Container sx={styles.container}>
          {/* Logo Section */}
          <div sx={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
          </div>

          {/* Profile section on the left */}
          <div sx={styles.profileContainer}>
            <Avatar sx={styles.avatar} onClick={handleMenuOpen} />
            <Typography sx={styles.email}>{user?.email || 'Guest'}</Typography>
          </div>

          {/* Navigation buttons on the right */}
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

            {/* Upload Reel Button */}
            <Button color="inherit" sx={styles.uploadButton} onClick={handleUploadDialogOpen}>
              Upload Reel
            </Button>
          </div>

          {/* User Profile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            sx={styles.menu}
          >
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
          </Menu>
        </Container>
      </Toolbar>

      {/* Dialog for uploading reel (camera and mic) */}
      <Dialog open={openUploadDialog} onClose={handleUploadDialogClose}>
        <DialogTitle>Upload Your Reel</DialogTitle>
        <DialogContent>
          <div>
            {mediaStream ? (
              <video
                width="100%"
                height="auto"
                autoPlay
                muted
                ref={(videoElement) => {
                  if (videoElement && mediaStream) {
                    videoElement.srcObject = mediaStream;
                  }
                }}
              />
            ) : (
              <Typography variant="body1" color="textSecondary">No camera or microphone access granted.</Typography>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUploadDialogClose} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
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
    borderRadius:'30%', // Space between logo and profile section
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
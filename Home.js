import React from 'react';
import { Box, Button, Typography, Container, Slide, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import background from '../assets/back.jpg'; // Import the image

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${background})`, // Use the imported image directly
        backgroundColor: '#2e7d32', // Fallback color
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        animation: `${fadeIn} 2s ease-in-out`,
      }}
    >
      <Container>
        <Slide direction="down" in={true} timeout={1000}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#90caf9',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
              animation: `${slideIn} 2s ease-out`,
            }}
          >
            Welcome to EcoConnect
          </Typography>
        </Slide>
        <Fade in={true} timeout={2000}>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              fontSize: '1.2rem',
              fontWeight: '500',
              maxWidth: '600px',
              color:'yellow',
              margin: 'auto',
              lineHeight: '1.6',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
            }}
          >
            Join us in creating a cleaner, greener, and more sustainable future. Every step counts.
          </Typography>
        </Fade>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            animation: `${fadeIn} 3s ease-in-out`,
          }}
        >
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/login"
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              borderRadius: '20px',
              fontWeight: 'bold',
              backgroundColor: 'rgba(0, 100, 0, 0.85)',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': { backgroundColor: '#1b5e20' },
            }}
          >
            Log In
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/signup"
            sx={{
              fontSize: '1.2rem',
              padding: '10px 30px',
              borderRadius: '20px',
              fontWeight: 'bold',
              color: '#ffffff',
              borderColor: '#ffffff',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;

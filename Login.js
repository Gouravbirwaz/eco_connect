import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={styles.box}>
        <Typography variant="h5" sx={styles.header}>
          Log In
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={styles.input}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={styles.input}
          />
          {error && <Typography sx={styles.errorText}>{error}</Typography>}
          <Button type="submit" variant="contained" fullWidth sx={styles.button}>
            Log In
          </Button>
          <Typography sx={styles.signupLink}>
            Don't have an account? <a href="/signup" style={styles.link}>Sign up here</a>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 8,
    marginTop: '100px', // Corrected marginTop placement
    backgroundColor: '#f1f9f1',
    backgroundImage: 'url(/logo.jpeg)', // Ensure correct path to your image
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
    height: '60vh', // Full height of the viewport
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#2E7D32',  // Forest green for the header
    marginBottom: '20px',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#ffffff', // White background for input fields
    borderRadius: '8px',
    border: '1px solid #c8e6c9', // Light green border
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#388E3C',  // Green button
    color: '#fff',
    borderRadius: '8px',
    padding: '12px',
    '&:hover': {
      backgroundColor: '#2e7d32', // Slightly darker green on hover
    },
  },
  errorText: {
    color: '#d32f2f',  // Red color for errors
    marginBottom: '10px',
    textAlign: 'center',
  },
  signupLink: {
    marginTop: '15px',
    textAlign: 'center',
  },
  link: {
    color: '#388e3c',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;

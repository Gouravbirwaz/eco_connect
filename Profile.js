import React, { useState } from 'react';
import { Avatar, Typography, Button, Paper, Box, Grid, TextField } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [editMode, setEditMode] = useState(false); // Track if in edit mode
  const [name, setName] = useState('John Doe');  // Default user name
  const [bio, setBio] = useState('A short bio about the user.'); // Default bio
  const [credits] = useState(100); // Credits are not editable here
  const [reelsEarnings] = useState(50); // Earnings from Reels (static data for now)
  const [reelsCount] = useState(5); // Reels uploaded (static data for now)
  const navigate = useNavigate();

  // Handle toggle between view and edit mode
  const handleEditProfile = () => {
    setEditMode(true);  // Enable edit mode
  };

  // Save the edited profile data (without Firebase)
  const handleSaveChanges = () => {
    setEditMode(false); // Disable edit mode
  };

  // Handle Logout Button
  const handleLogout = () => {
    navigate('/');  // Redirect to login page after logging out
  };

  return (
    <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#f0f4f8' }}>
      <Paper
        className="p-8 mx-auto my-10 shadow-lg rounded-xl"
        style={{ backgroundColor: '#fff', width: '100%', maxWidth: '1200px' }}
      >
        <Grid container spacing={4}>
          {/* Left Column (Avatar, Name, Email, Edit and Logout Buttons) */}
          <Grid item xs={12} sm={4}>
            <div className="flex flex-col items-center gap-4">
              <Avatar sx={{ bgcolor: deepPurple[500], width: 100, height: 100 }} alt={name}>
                {name ? name.charAt(0) : 'U'}
              </Avatar>

              {editMode ? (
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
              ) : (
                <Typography variant="h4" className="font-semibold">
                  {name}
                </Typography>
              )}

              <Typography variant="body1" color="textSecondary">
                user@example.com
              </Typography>

              {editMode ? (
                <TextField
                  label="Bio"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
              ) : (
                <Typography variant="body2" color="textSecondary">
                  {bio}
                </Typography>
              )}

              {editMode ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveChanges}
                  sx={{
                    backgroundColor: '#388e3c',
                    '&:hover': { backgroundColor: '#2e7d32' },
                  }}
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEditProfile}
                  sx={{
                    backgroundColor: '#388e3c',
                    '&:hover': { backgroundColor: '#2e7d32' },
                  }}
                >
                  Edit Profile
                </Button>
              )}

              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{
                  backgroundColor: '#f44336',
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                Logout
              </Button>
            </div>
          </Grid>

          {/* Right Column (Credits, Reels Earnings, Progress Graph) */}
          <Grid item xs={12} sm={8}>
            <div className="flex flex-col gap-4">
              <Box sx={{ mt: 4, backgroundColor: '#d9f7d9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>
                  Credits & Rewards
                </Typography>
                <Typography variant="body1">
                  <strong>Credits:</strong> {credits}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: '#388e3c',
                    '&:hover': { backgroundColor: '#2e7d32' },
                  }}
                >
                  Redeem Rewards
                </Button>
              </Box>

              <Box sx={{ mt: 4, backgroundColor: '#f1f8e9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>
                  My Reels Earnings
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Total Earnings from Reels:</strong> {reelsEarnings} coins
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Reels Uploaded:</strong> {reelsCount}
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;

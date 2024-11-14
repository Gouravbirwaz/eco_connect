import React, { useState } from 'react';
import { Avatar, Typography, Button, Paper, Box, Grid, TextField } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user || {});

  // Toggle edit mode
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  // Handle profile field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  // Save changes
  const handleSaveChanges = () => {
    // Logic to save changes to the database or backend
    setIsEditing(false);
  };

  // Handle Logout
  const handleLogout = () => {
    // Your logout logic here
    navigate('/');
  };

  // Example data for progress graph
  const data = [
    { month: 'Jan', earnings: 50 },
    { month: 'Feb', earnings: 80 },
    { month: 'Mar', earnings: 120 },
    { month: 'Apr', earnings: 150 },
    { month: 'May', earnings: 200 },
  ];

  return (
    <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#f0f4f8' }}>
      <Paper
        style={{ backgroundColor: '#fff', width: '100%', maxWidth: '1200px', margin: 'auto', padding: '20px' }}
      >
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} sm={4}>
            <div className="flex flex-col items-center gap-4">
              <Avatar sx={{ bgcolor: deepPurple[500], width: 100, height: 100 }} alt={editableUser.name || 'User'}>
                {editableUser.name ? editableUser.name.charAt(0) : 'U'}
              </Avatar>

              {/* Display or Edit User Name */}
              {isEditing ? (
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={editableUser.name || ''}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                <Typography variant="h4" className="font-semibold">
                  {editableUser.name || 'User Name'}
                </Typography>
              )}

              {/* Display or Edit User Email */}
              {isEditing ? (
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={editableUser.email || ''}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                <Typography variant="body1" color="textSecondary">
                  {editableUser.email || 'user@example.com'}
                </Typography>
              )}

              {/* Toggle Edit and Save Buttons */}
              <Button
                variant="contained"
                color="primary"
                onClick={isEditing ? handleSaveChanges : handleEditProfile}
                sx={{
                  backgroundColor: isEditing ? '#388e3c' : '#1976d2',
                  '&:hover': { backgroundColor: isEditing ? '#2e7d32' : '#1565c0' },
                  mt: 2,
                }}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>

              {/* Logout Button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' }, mt: 2 }}
              >
                Logout
              </Button>
            </div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={8}>
            <div className="flex flex-col gap-4">
              {/* About Me Section */}
              <Typography variant="h6">About Me</Typography>
              {isEditing ? (
                <TextField
                  label="Bio"
                  variant="outlined"
                  name="bio"
                  value={editableUser.bio || ''}
                  onChange={handleChange}
                  fullWidth
                  multiline
                />
              ) : (
                <Typography variant="body2" color="textSecondary">
                  {editableUser.bio || 'A short bio about the user.'}
                </Typography>
              )}

              {/* Credits & Rewards */}
              <Box sx={{ mt: 4, backgroundColor: '#d9f7d9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>Credits & Rewards</Typography>
                <Typography variant="body1"><strong>Credits:</strong> {editableUser.credits || 0}</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}><strong>Earned Coins:</strong> {editableUser.earnedCoins || 0}</Typography>
                <Button variant="contained" color="success" sx={{ backgroundColor: '#388e3c', '&:hover': { backgroundColor: '#2e7d32' } }}>Redeem Rewards</Button>
              </Box>

              {/* Reels Earnings */}
              <Box sx={{ mt: 4, backgroundColor: '#f1f8e9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>My Reels Earnings</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}><strong>Total Earnings from Reels:</strong> {editableUser.reelsEarnings || 0} coins</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}><strong>Reels Uploaded:</strong> {editableUser.reelsCount || 0}</Typography>
              </Box>

              {/* Reels Progress Graph */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>Reels Progress (Earnings Over Time)</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="earnings" fill="#388e3c" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;

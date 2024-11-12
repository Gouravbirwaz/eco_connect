import React from 'react';
import { Avatar, Typography, Button, Paper, Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  // Handle Edit Profile Button
  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  // Handle Logout Button
  const handleLogout = () => {
    // Your logout logic here (e.g., clearing auth tokens, signing out from Firebase)
    navigate('/');  // Redirect to the login page after logging out
  }

  // Example data for the progress graph (replace with actual user data)
  const data = [
    { month: 'Jan', earnings: 50 },
    { month: 'Feb', earnings: 80 },
    { month: 'Mar', earnings: 120 },
    { month: 'Apr', earnings: 150 },
    { month: 'May', earnings: 200 },
  ];

  return (
    <Box sx={{ width: '100%', padding: '20px', backgroundColor: '#f0f4f8' }}>
      {/* Main Container to Center Content */}
      <Paper
        className="p-8 mx-auto my-10 shadow-lg rounded-xl"
        style={{ backgroundColor: '#fff', width: '100%', maxWidth: '1200px' }}  // Ensures content is centered and doesn't stretch too much
      >
        <Grid container spacing={4}>
          {/* Left Column (Avatar, Name, Email, Edit and Logout Buttons) */}
          <Grid item xs={12} sm={4}>
            <div className="flex flex-col items-center gap-4">
              {/* Profile Avatar */}
              <Avatar sx={{ bgcolor: deepPurple[500], width: 100, height: 100 }} alt={user?.name || 'User Name'}>
                {user?.name ? user.name.charAt(0) : 'U'}
              </Avatar>

              {/* User Name */}
              <Typography variant="h4" className="font-semibold">
                {user?.name || 'User Name'}
              </Typography>

              {/* User Email */}
              <Typography variant="body1" color="textSecondary">
                {user?.email || 'user@example.com'}
              </Typography>

              {/* Edit Profile Button */}
              <Button
                variant="contained"
                color="primary"
                className="mt-4"
                onClick={handleEditProfile}
                sx={{
                  backgroundColor: '#388e3c',  // Green color for eco-friendly theme
                  '&:hover': {
                    backgroundColor: '#2e7d32', // Darker green on hover
                  },
                }}
              >
                Edit Profile
              </Button>

              {/* Logout Button */}
              <Button
                variant="contained"
                color="secondary"
                className="mt-4"
                onClick={handleLogout}
                sx={{
                  backgroundColor: '#f44336', // Red color for logout
                  '&:hover': {
                    backgroundColor: '#d32f2f', // Darker red on hover
                  },
                }}
              >
                Logout
              </Button>
            </div>
          </Grid>

          {/* Right Column (About Me, Credits, Reels Earnings, Progress Graph) */}
          <Grid item xs={12} sm={8}>
            <div className="flex flex-col gap-4">
              {/* About Me Section */}
              <div className="mt-8">
                <Typography variant="h6" className="mb-2">
                  About Me
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A short bio about the user. This section can include interests, hobbies, or an environmental mission statement.
                </Typography>
              </div>

              {/* Credits and Earned Coins Section */}
              <Box sx={{ mt: 4, backgroundColor: '#d9f7d9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" className="mb-2" sx={{ fontWeight: '600', color: '#388e3c' }}>
                  Credits & Rewards
                </Typography>

                {/* Display Credits */}
                <Typography variant="body1">
                  <strong>Credits:</strong> {user?.credits || 0}
                </Typography>

                {/* Display Earned Coins */}
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Earned Coins:</strong> {user?.earnedCoins || 0}
                </Typography>

                {/* Redeem Button */}
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    backgroundColor: '#388e3c',  // Green button for redeem
                    '&:hover': {
                      backgroundColor: '#2e7d32', // Darker green on hover
                    },
                  }}
                >
                  Redeem Rewards
                </Button>
              </Box>

              {/* Reels Earnings Section */}
              <Box sx={{ mt: 4, backgroundColor: '#f1f8e9', padding: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>
                  My Reels Earnings
                </Typography>

                {/* Display Earnings */}
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Total Earnings from Reels:</strong> {user?.reelsEarnings || 0} coins
                </Typography>

                {/* Show Reels Uploaded */}
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Reels Uploaded:</strong> {user?.reelsCount || 0}
                </Typography>
              </Box>

              {/* Reels Progress Graph */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#388e3c' }}>
                  Reels Progress (Earnings Over Time)
                </Typography>

                {/* Progress Graph */}
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

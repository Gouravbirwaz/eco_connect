// src/components/Profile.js
import React from 'react';
import { Avatar, Typography, Button, Paper } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Profile = () => {
  return (
    <Paper
      className="p-8 max-w-lg mx-auto my-10 shadow-lg rounded-xl"
      style={{ backgroundColor: '#f0f4f8' }}
    >
      <div className="flex flex-col items-center gap-4">
        <Avatar
          sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}
          alt="User Name"
        >
          U
        </Avatar>
        <Typography variant="h4" className="font-semibold">
          User Name
        </Typography>
        <Typography variant="body1" color="textSecondary">
          user@example.com
        </Typography>
        <Button variant="contained" color="primary" className="mt-4">
          Edit Profile
        </Button>
      </div>
      <div className="mt-8">
        <Typography variant="h6" className="mb-2">
          About Me
        </Typography>
        <Typography variant="body2" color="textSecondary">
          A short bio about the user. This section can be expanded to include
          interests, hobbies, and a personal mission statement related to
          environmental efforts.
        </Typography>
      </div>
    </Paper>
  );
};

export default Profile;

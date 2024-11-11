// src/components/EcoChallenge.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const EcoChallenge = () => {
  const challenges = [
    { name: 'Plastic-Free Day', description: 'Avoid all single-use plastics for a day!' },
    { name: 'Commute Green', description: 'Choose public transportation or biking for a week.' },
    { name: 'Community Cleanup', description: 'Organize or participate in a local cleanup event.' },
  ];

  return (
    <Paper
      className="p-6 max-w-2xl mx-auto my-10 shadow-lg rounded-lg"
      style={{ backgroundColor: '#e8f5e9' }}
    >
      <Typography variant="h4" align="center" className="font-semibold text-green-700">
        EcoChallenges
      </Typography>
      <List>
        {challenges.map((challenge, index) => (
          <ListItem key={index} className="border-b border-gray-300">
            <ListItemText
              primary={<Typography variant="h6" className="text-green-600">{challenge.name}</Typography>}
              secondary={<Typography variant="body2">{challenge.description}</Typography>}
            />
            <Button variant="outlined" color="primary" className="self-center">
              Join
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EcoChallenge;

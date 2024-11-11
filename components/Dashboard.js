import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Box } from '@mui/material';

function Dashboard() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Environmental Health Score
              </Typography>
              <Typography variant="body2" color="text.secondary">
                85% – Excellent
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minHeight: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Eco-Challenges
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Participate in the ongoing tree planting challenge.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Join Challenge
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;

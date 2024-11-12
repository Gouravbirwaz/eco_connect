import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Box, Avatar, Paper } from '@mui/material';
import { green, blue, orange, purple } from '@mui/material/colors';

function Dashboard() {
  return (
    <Box sx={{ mt: 5, px: 3, backgroundColor: '#f7fafc' }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Environmental Health Score Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            minHeight: 200, 
            borderRadius: 3, 
            boxShadow: 3, 
            background: 'linear-gradient(135deg, #a8e063, #56ab2f)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" color="text.primary">
                Environmental Health Score
              </Typography>
              <Typography variant="h6" component="div" color="text.primary" sx={{ fontWeight: 700 }}>
                85% – Excellent
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A thriving environment with minimal pollution and healthy ecosystem.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Eco-Challenges Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            minHeight: 200, 
            borderRadius: 3, 
            boxShadow: 3, 
            background: 'linear-gradient(135deg, #ff8e53, #fe6b8b)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" color="text.primary">
                Eco-Challenges
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join the ongoing tree planting challenge and make a difference.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Join Challenge
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Data Collection & Abnormality Detection */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{
            p: 3, 
            display: 'flex', 
            alignItems: 'center', 
            borderRadius: 3, 
            backgroundColor: blue[50],
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <Avatar sx={{
              bgcolor: green[500], 
              width: 56, 
              height: 56, 
              mr: 2, 
              boxShadow: 3
            }}>
              {/* Icon or letter inside Avatar */}
            </Avatar>
            <Box>
              <Typography variant="h6" color="text.primary">Environmental Data</Typography>
              <Typography variant="body2" color="text.secondary">
                Temperature: 25°C | Soil Quality: Moderate | Air Quality: Good
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Detecting anomalies... Suggestions for improvement available.
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Incentivized Recommendation Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            minHeight: 200, 
            borderRadius: 3, 
            boxShadow: 3, 
            background: 'linear-gradient(135deg, #ff9800, #f44336)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}>
            <CardContent>
              <Typography variant="h5" component="div" color="text.primary">
                Sustainable Recommendations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Based on the detected soil and weather conditions, we recommend planting apple trees.
              </Typography>
              <Typography variant="body2" color="green" sx={{ mt: 1 }}>
                Get 20% off on apple saplings with your next purchase!
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Claim Offer
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;

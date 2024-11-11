// src/components/Reels.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';

const Reels = () => {
  const sampleReels = [
    { title: 'Beach Cleanup Drive', image: '/images/beach.jpg' },
    { title: 'Tree Planting Day', image: '/images/trees.jpg' },
    { title: 'Recycling Workshop', image: '/images/recycle.jpg' },
  ];

  return (
    <div className="p-4">
      <Typography variant="h4" className="text-center my-4 font-semibold">
        Community Reels
      </Typography>
      <Grid container spacing={4}>
        {sampleReels.map((reel, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="shadow-lg rounded-lg">
              <CardMedia
                component="img"
                height="140"
                image={reel.image}
                alt={reel.title}
              />
              <CardContent>
                <Typography variant="h6">{reel.title}</Typography>
                <Typography variant="body2" color="textSecondary" className="mt-2">
                  Watch and learn how our community is making a difference in environmental sustainability.
                </Typography>
                <Button size="small" color="primary" className="mt-3">
                  Watch Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Reels;

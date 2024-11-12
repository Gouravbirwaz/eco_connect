// src/components/Reels.js
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from '@mui/material';
import { PlayCircleOutline, FavoriteBorder, ChatBubbleOutline, PersonAdd } from '@mui/icons-material';

const Reels = () => {
  const sampleReels = [
    { title: 'Beach Cleanup Drive', image: '/images/beach.jpg', likes: 120, comments: 24, creator: 'John Doe' },
    { title: 'Tree Planting Day', image: '/images/trees.jpg', likes: 150, comments: 30, creator: 'Jane Smith' },
    { title: 'Recycling Workshop', image: '/images/recycle.jpg', likes: 90, comments: 15, creator: 'Michael Lee' },
  ];

  const [likedReels, setLikedReels] = useState({}); // Track liked reels

  const toggleLike = (index) => {
    setLikedReels((prevLikes) => ({
      ...prevLikes,
      [index]: !prevLikes[index],
    }));
  };

  return (
    <Box sx={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" className="text-center my-4 font-semibold" sx={{
        position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10, color: 'white',
        fontWeight: 600, fontSize: '1.5rem'
      }}>
        Community Reels
      </Typography>
      {sampleReels.map((reel, index) => (
        <Card key={index} sx={{
          height: '80vh', // Height of each reel
          width: '90vw', // Reduced width for a more compact view
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          scrollSnapAlign: 'start',
          position: 'relative',
          mx: 'auto', // Center the reel horizontally
        }}>
          <CardMedia
            component="img"
            height="100%"
            image={reel.image}
            alt={reel.title}
            sx={{ objectFit: 'cover', width: '100%' }}
          />
          {/* Play Button */}
          <IconButton sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }
          }}>
            <PlayCircleOutline />
          </IconButton>

          {/* Reel Info & Interactions */}
          <CardContent sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            zIndex: 10,
            color: 'white',
            textAlign: 'center',
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {reel.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              by {reel.creator}
            </Typography>

            {/* Like, Comment, Follow Section */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              mt: 2,
            }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton onClick={() => toggleLike(index)} color={likedReels[index] ? 'error' : 'inherit'}>
                  <FavoriteBorder />
                </IconButton>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {reel.likes + (likedReels[index] ? 1 : 0)} Likes
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton>
                  <ChatBubbleOutline />
                </IconButton>
                <Typography variant="body2">{reel.comments} Comments</Typography>
              </Box>

              <Button variant="outlined" color="primary" size="small" startIcon={<PersonAdd />} sx={{ mt: 2 }}>
                Follow
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Reels;

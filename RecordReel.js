import React, { useState, useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getDatabase, ref as dbRef, set } from 'firebase/database';
import { auth, db, storage } from '../firebase'; // Import Firebase services

function RecordReel() {
  const [mediaStream, setMediaStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const checkPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch (error) {
      console.error('Permission denied for camera or microphone', error);
      return false;
    }
  };

  const startRecording = async () => {
    const hasPermission = await checkPermission();
    if (!hasPermission) {
      setPermissionDenied(true);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => chunks.current.push(event.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'video/mp4' });
        setVideoURL(URL.createObjectURL(blob));
        chunks.current = [];
      };
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing camera or microphone', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  const uploadVideo = async () => {
    if (!videoURL || !auth.currentUser) {
      console.error('No video or user not authenticated');
      return;
    }

    try {
      const videoBlob = await fetch(videoURL).then(res => res.blob());
      const storageRef = ref(storage, `reels/${auth.currentUser.uid}/${Date.now()}.mp4`);
      const uploadTask = uploadBytesResumable(storageRef, videoBlob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Track upload progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Error uploading video:', error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Save video metadata to Realtime Database
          const videoData = {
            userId: auth.currentUser.uid,
            videoURL: downloadURL,
            timestamp: new Date().toISOString(),
          };

          const videoRefInDb = dbRef(db, 'reels/' + auth.currentUser.uid + '/' + Date.now());
          await set(videoRefInDb, videoData);

          console.log('Video uploaded and metadata saved successfully!');
          alert('Video uploaded and saved successfully!');
        }
      );
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  const resetRecording = () => {
    setVideoURL(null);
    setRecording(false);
    setMediaStream(null);
    chunks.current = [];
  };

  const cancelUpload = () => {
    resetRecording();
    setPermissionDenied(false);
  };

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
        Record Your Reel
      </Typography>

      {permissionDenied && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          You need to grant camera and microphone access to record a video.
        </Typography>
      )}

      <video ref={videoRef} autoPlay muted style={{ width: '100%', maxHeight: '400px', borderRadius: '10px' }} />

      {videoURL && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>Review your recording:</Typography>
          <video src={videoURL} controls style={{ width: '100%', maxHeight: '400px', borderRadius: '10px' }} />
        </Box>
      )}

      <Box sx={{ mt: 2 }}>
        {!recording ? (
          <Button variant="contained" color="primary" onClick={startRecording}>
            Start Recording
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={stopRecording}>
            Stop Recording
          </Button>
        )}
      </Box>

      {videoURL && !recording && (
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" color="error" onClick={resetRecording}>
            Reset Video
          </Button>
        </Box>
      )}

      {videoURL && !recording && (
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" color="error" onClick={cancelUpload}>
            Cancel Upload
          </Button>
        </Box>
      )}

      {videoURL && !recording && (
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="success" onClick={uploadVideo}>
            Confirm Upload
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default RecordReel;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Import Firebase functions from your custom firebase.js file
import { auth, createUserWithEmailAndPassword, database, ref, set } from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to send OTP to the user's email
  const sendOtp = async () => {
    if (!email || !username || !phone || !password) {
      toast.error('Please fill all fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      console.log('OTP send response:', response); // Log the response from the server
      if (response.data.success) {
        toast.success('OTP sent to your email!');
        setOtpSent(true);
      } else {
        toast.error(response.data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('Error sending OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to verify OTP and sign up the user
  const verifyOtpAndSignup = async () => {
    if (!otp) {
      toast.error('Please enter the OTP.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { email, otpEntered: otp });
      console.log('OTP verify response:', response); // Log the response from the server

      if (response.data.success) {
        toast.success('OTP verified successfully! Signing you up...');

        // Now that the OTP is verified, create the user in Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firebase Realtime Database
        await set(ref(database, 'users/' + user.uid), {
          username,
          email,
          phone,
          password,  // You may want to store only hashed passwords in production.
        });

        toast.success('Signup successful! Redirecting to login...');
        
        // Redirect to login page after successful signup
        navigate('/login');  // Redirect to login page after successful signup
      } else {
        toast.error(response.data.message || 'Invalid OTP or OTP expired.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Error verifying OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Signup</h2>
      <div style={styles.form}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          style={styles.input}
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          style={styles.input}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          style={styles.input}
        />
        <button
          onClick={sendOtp}
          style={styles.button}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send OTP'}
        </button>

        {otpSent && (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              style={styles.input}
            />
            <button
              onClick={verifyOtpAndSignup}
              style={styles.button}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP and Sign Up'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  },
  header: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Signup;

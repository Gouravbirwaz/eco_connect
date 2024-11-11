// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';  // Import Realtime Database module

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFHxt83jUiWNzhUSX63qcq6xDVCsWUBlw",
  authDomain: "gemhack-a9246.firebaseapp.com",
  databaseURL: "https://gemhack-a9246-default-rtdb.asia-southeast1.firebasedatabase.app", // Realtime Database URL
  projectId: "gemhack-a9246",
  storageBucket: "gemhack-a9246.firebasestorage.app",
  messagingSenderId: "118483115946",
  appId: "1:118483115946:web:65c9b5e60c7a123c86d5d3",
  measurementId: "G-Y075DR7QNE"
};

const app = initializeApp(firebaseConfig);

// Get Auth and Database instances
const auth = getAuth(app);
const database = getDatabase(app);

// Export Firebase services
export { auth, createUserWithEmailAndPassword, database, ref, set };

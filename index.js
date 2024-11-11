import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is where your global styles (like TailwindCSS) are imported
import App from './App'; // The main component of your app

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The root div in your public/index.html
);

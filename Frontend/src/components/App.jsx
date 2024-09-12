// src/components/App.jsx
import React, { useState } from 'react';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import '../styles/App.css'; // Ensure this path is correct

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="container">
      <h1 className="page-title">Personal Database</h1>
      {showSignIn ? (
        <>
          <SignIn />
          <button
            type="button"
            className="button"
            onClick={() => setShowSignIn(false)}
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          <SignUp />
          <button
            type="button"
            className="button"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default App;

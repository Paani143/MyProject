// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Import any custom styles if needed

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    // For example, you might want to clear the authentication state
    navigate('/'); // Redirect to the login page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ boxShadow: '0 20px 35px rgb(200 240 250)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="dashboard.html">Personal DB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="dashboard.html">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Items List
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="job_application.html">Job Application</a></li>
                  <li><a className="dropdown-item" href="profile_display.html">Profile</a></li>
                  <li><a className="dropdown-item" href="travel.html">Travel History</a></li>
                  <li><a className="dropdown-item" href="music.html">Music</a></li>
                  <li><a className="dropdown-item" href="movies.html">Movies</a></li>
                </ul>
              </li>
            </ul>
            <ul>
              <button type="button" className="btn btn-outline-danger" id="logout" style={{ marginLeft: '65%', marginTop: '1%' }} onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="dashboard__title">Welcome to Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;

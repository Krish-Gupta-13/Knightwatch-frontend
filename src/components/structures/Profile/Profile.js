import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Profile.css';


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="edit">
       <Link to={'/edit'}> <button className="edit">Edit</button></Link>
      </div>
      <div className="profile-header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
        </div>
        <h1 className="profile-name">Krish Gupta</h1>
        <div className="profile-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter-square twitter"></i>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-item">
          <i className="fas fa-envelope"></i>
          <span>user.email</span>
        </div>
        <div className="profile-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>No Address Added Yet</span>
        </div>
        <div className="profile-item">
          <i className="fas fa-university"></i>
          <span>No University Added Yet</span>
        </div>
        <div className="profile-item">
        <i className="fa fa-phone"></i>
        <span>No Phone Number Added Yet</span>
      </div>
      
      </div>
    </div>
  );
};

export default Profile;

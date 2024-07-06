import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Profile.css';
axios.defaults.withCredentials = true;


const Profile = () => {

  const [user, setUser] = useState('');
  const [profileUser, setProfileUser] = useState('');

  const sendUserRequest = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/user', {
        withCredentials: true
      })
      const data = res.data;
      console.log(data);
      return data;
    }catch(err){
      console.log('Error fetching user data:', err)
    }
  }
  const sendProfileRequest = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/profile', {
        withCredentials: true
      })
      const profileData = res.data;
      console.log(profileData);
      return profileData;
    }catch(err){
    console.log("Error fetching user data:", err);
    }
  }


  useEffect(() => {
    sendUserRequest().then((data) => {
      if(data){
        setUser(data.user);
      }
    })
  },[])
  
  useEffect(() => {
  sendProfileRequest().then((data) => {
    if(data){
      setProfileUser(data.profileUser);
    }
  })
  },[])




  return (
    <div className="profile-container">
      <div className="edit">
       <Link to={'/edit'}> <button className="edit">Edit</button></Link>
      </div>
      <div className="profile-header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
        </div>
        <h1 className="profile-name">{user.name}</h1>
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
          <span>{user.email}</span>
        </div>
        <div className="profile-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>{profileUser.location} </span>
        </div>
        <div className="profile-item">
          <i className="fas fa-university"></i>
          <span>{profileUser.college}</span>
        </div>
        <div className="profile-item">
        <i className="fa fa-phone"></i>
        <span>{profileUser.phone}</span>
      </div>
      
      </div>
    </div>
  );
};

export default Profile;

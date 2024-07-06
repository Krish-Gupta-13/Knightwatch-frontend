import React, { useEffect, useState } from 'react';
import '../../styles/Edit.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store';
import { useNavigate } from 'react-router-dom';

const PersonalInfoForm = () => {

  const [location, setLocation] = useState('');
  const [college, setCollege] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');

  const [user, setUser] = useState('');
  const [profileUser, setProfileUser] = useState('');

  const dispatch = useDispatch()
  const history = useNavigate();

  const handleGithub = ((e) => {
    console.log(e.target.value);
    setGithub(e.target.value);
  });
  const handlePhone = ((e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  });
  const handleInstagram = ((e) => {
    setInstagram(e.target.value);
  });
  const handleTwitter = ((e) => {
    setTwitter(e.target.value);
  });
  const handleLocation = ((e) => {
    setLocation(e.target.value);
  });
  const handleCollege = ((e) => {
    setCollege(e.target.value);
  });
  const handleLinkedIn = ((e) => {
    setLinkedin(e.target.value);
  });
 

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
  }, [])

  useEffect(() => {
    sendProfileRequest().then((data) => {
      if(data){
        setProfileUser(data.profileUser);
      }
    })
    },[])

  const sendEditRequest = async () => {
    const email = user.email
    try{
      const res = await axios.post('http://localhost:5000/api/edit', {
        github, linkedin, instagram, twitter, college, location, email, phone
      });
      const data = res.data;
      return data;
    }catch(err){
      console.log("some error while setting email!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendEditRequest().then(() => dispatch(authActions.clock()))
          history("/profile");
  }


    return (
      <form onSubmit={handleSubmit}>

      <div className="container">
        <h2>Personal</h2>
        <p>Use a permanent address where you can receive mail.</p>
        <div className="form">
          <div className="profile-pic">
            <label htmlFor="upload"><span>Click to upload or drag and drop</span></label>
            <input type="file" id="upload" accept="image/png, image/jpeg" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder={user.name} disabled=
            'true' />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder={user.email} disabled="true" />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input onChange={handleLocation} type="text" id="location" name="location" placeholder={profileUser.location} />
          </div>
          <div className="form-group">
            <label htmlFor="college">College</label>
            <input onChange={handleCollege} type="text" id="college" name="college" placeholder={profileUser.college} />
          </div>     
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={handlePhone} type="text" id="phone" name="phone" placeholder={profileUser.phone} />
          </div>      
           <button type="submit">Save</button>
        </div>

  <hr />

        <h2 className='section-2'>Personal</h2>
        <p>Your social links.</p>
        <div className="form">
          <div className="form-group">
            <label htmlFor="github">Github</label>
            <input onChange={handleGithub} type="text" id="github" name="github" placeholder={profileUser.github} />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
                <input onChange={handleLinkedIn} type="text" id="linkedin" name="linkedin" placeholder={profileUser.linkedin} />
            <div className="form-group">
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Twitter</label>
            <input onChange={handleTwitter} type="text" id="twitter" name="twitter" placeholder={profileUser.twitter} />
          </div>
          <div className="form-group">
            <label htmlFor="instagram">Instagram</label>
            <input onChange={handleInstagram} type="text" id="instagram" name="instagram" placeholder={profileUser.instagram} />
          </div>
          <button type="submit">Save</button>
        </div>
        </div>
        </form>
    );
  };
  
  export default PersonalInfoForm;
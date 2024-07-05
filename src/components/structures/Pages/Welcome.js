import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChessClock from '../Clocks/Custom.js';
import Home from './Home.js';
import HomeStyling from '../../styles/Home.css'
axios.defaults.withCredentials = true;

let firstRender = true;
const Welcome = () => {
  const [user, setUser] = useState('');
  const refreshToken = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/refresh', {
      withCredentials: true
    })
    const data = res.data;
    return data;    
    }catch (err){ 
      console.log('Error refreshing token:', err)
    }
}

  const sendRequest = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/user', {
        withCredentials: true
      })
      const data = res.data;
      return data;
    }catch(err){
      console.log('Error fetching user data:', err)
    }
  }

  useEffect(() => {
    if(firstRender){
      firstRender = false
      sendRequest().then((data) =>{
        if(data){
          setUser(data.user)
        }
        else{
          console.log("something went wrong while rendering first time")
        }
      })
    }
    let interval = setInterval(() => {
      refreshToken().then((data)=>{
        if(data){
          setUser(data.user)
        }
        else{
          console.log("something went wrong while refreshing token")
        }
      })
    },1000*60*60*24)
    
    return () => clearInterval(interval)

  },[])

   return (
    <React.Fragment>
    
        <Home/>
    </React.Fragment>

   )}

export default Welcome


  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:5000/api/refresh', {
  //       withCredentials: true
  //     });
  //     const data = res.data;
  //     return data;
  //   } catch (err) {
  //     console.log('Error refreshing token:', err);
  //     return null;
  //   }
  // }
  // const sendRequest = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:5000/api/user', {
  //       withCredentials: true
  //     });
  //     const data = res.data;
  //     return data;
  //   } catch (err) {
  //     console.log('Error fetching user data:', err);
  //     return null;
  //   }
  // }



    // const refreshToken = async () => {
  //     const res = await axios.get('http://localhost:5000/api/refresh', {
  //     withCredentials: true
  //     }).catch ((err) => console.log('Error refreshing token:', err)) 
  //     const data = res.data;
  //     return data;    
  // }
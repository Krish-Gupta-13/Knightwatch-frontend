import {React, useState} from 'react';
import './App.css';
import Login from './components/structures/Auth/Login';
import Signup from './components/structures/Auth/Signup';
import Welcome from './components/structures/Pages/Welcome';
import {Routes, Route} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/structures/Auth/Navbar'
import Description from './components/structures/Pages/Description';
import { useSelector } from "react-redux";
import ChessClock from './components/structures/Clocks/Custom';
import Bullet from './components/structures/Clocks/Bullet';
import Rapid from './components/structures/Clocks/Rapid';
import Blitz from './components/structures/Clocks/Blitz';
import Footer from './components/structures/Footer';
import Profile from './components/structures/Profile/Profile';
import Edit from './components/structures/Profile/Edit'

function App() {



  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (

    <div>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {isLoggedIn &&<Route path="/profile" element={<Profile/>} />}
          {isLoggedIn &&<Route path="/edit" element={<Edit/>} />}
          {isLoggedIn && <Route path="/user" element={<Welcome/>} />}
          {isLoggedIn && <Route path="/clock" element={<ChessClock/>} />}
          {isLoggedIn && <Route path="/bullet" element={<Bullet/>} />}
          {isLoggedIn && <Route path="/blitz" element={<Blitz/>} />}
          {isLoggedIn && <Route path="/rapid" element={<Rapid/>} />}
          <Route path="/description" element={<Description/>} />
          <Route path="/logout" element={<Signup/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


// http://locaalhost:5000

// https://knightwatch-backend.onrender.c0om
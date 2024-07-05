import React, { useState } from 'react'
import SignupStyling from "../../styles/Signup.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import {Modal, Button} from 'react-bootstrap';

const Signup = () => {

  const history = useNavigate();

  // state hooks
  const [name, setName]  = useState('');
  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleName = (e) => {
    setName(e.target.value)
    // console.log(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const sendRequest = async () => {
    try{
      const res = await axios.post("http://localhost:5000/api/signup", {
        name: name,
        email: email,
        password: password,
      })
      console.log("user signed up")
      const data = await res.data;
      return data;
    }
    catch(err){
      setErrorMessage("* Email already exists!");
      console.log("email already exists!", err);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  }


  // submit handler

  const handleSubmit = (e, err) => {
    e.preventDefault();
    setErrorMessage('');
    let arr = [name, email, password]
    sendRequest().then((data, err) => {
      if (data) {

        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          history("/login");
        }, 1000);
       
      } else {
        
        console.log("email already exists!");
      }
    });
  };
 

  return (
    <div>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Button variant="success" onClick={() => setShowModal(false)}>
        Registered Successfully! 
        </Button>
    </Modal>
    <form className='main-body' onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          onChange={handleName}
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
          required="true"
        />
        </div>
        
      <div className="mb-3">
        <label>Email address</label>
        <input
         onChange={handleEmail}
          type="email"
          className="form-control"
          placeholder="Enter your email"
          required="true"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handlePassword}
          type="password"
          className="form-control"
          placeholder="Enter the password"
          required="true"
        />
      </div>

      {errorMessage && (
        <div className="alert-danger errormessage" role="alert">
          {errorMessage}
        </div>
      )}


      <div className="d-grid">
        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to={"/login"}>sign in?</Link>
      </p>
    </form>
    </div>
  )
}

export default Signup

  // const sendRequest = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/signup", {
  //       name: name,
  //       email: email,
  //       password: password,
  //     });
  //     const data = await res.data;
  //     return data;
  //   } catch (err) {
  //     console.log("email already exists", err.response ? err.response.data : err.message);

  //   }
  // };


  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(e.name)
  //   let arr = [name, email, password]
  //   // console.log(arr)
  //   sendRequest().then(() => 
  //     history("/login")
  //   )
  // }
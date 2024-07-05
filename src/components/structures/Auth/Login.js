import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store';
import LoginStyling from '../../styles/Login.css'
import { Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

const Login = () => {
  const dispatch = useDispatch()
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const sendRequest = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email, password
      });
      setLoggedIn('Logged In successfully!');
      console.log("user logged in successfully");
      const data = res.data;
      return data;
      
    } catch (err) {
      setErrorMessage('* Invalid Credentials');
        console.log("Login failed with status", err.response.status);
        setTimeout(() => {
          setErrorMessage('');
        }, 4000);
    }
  };
  


  const handleSubmit = (e, err) => {
    e.preventDefault();
    setErrorMessage('');
    sendRequest().then((data, err) => {
      if (data) {
        dispatch(authActions.login());
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          history("/user");
        }, 500);
      } else {
        console.log("Invalid credentials");
      }
    });
  };



  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <div>
    <div className='container'>
      <form className='main-body' onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter email"
            required="true"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required="true"
          />
        </div>

        
        {errorMessage && (
          <div className="alert-danger errormessage" role="alert">
            {errorMessage}
          </div>
        )}


        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Not a user? <Link to={"/signup"}>SignUp</Link>
        </p>
      </form>
      </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Button variant="success" onClick={() => setShowModal(false)}>
        Login Successful! 
        </Button>
    </Modal>

    </div>
      
  )
}

export default Login

  // const sendRequest = async () => {
  //     const res = await axios.post('http://localhost:5000/api/login', {
  //       email, password
  //   }).catch((err) => console.log("incorrect credentials",err));


  //     const data = await res.data;
  //     return data;
  // }
  // const sendRequest = async () => {
  //   try{
  //     const res = await axios.post('http://localhost:5000/api/login', {
  //       email, password
  //     })
  //     const data = await res.data;
  //     return data;
  //   }
  //   catch(err){
  //     console.log("send request failed", err);
  //   }
  // }





      // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let arr = [email, password];
  //   sendRequest().then(()=>dispatch(authActions.login())).then(() => 
  //     history("/user")
  //   )
  // }
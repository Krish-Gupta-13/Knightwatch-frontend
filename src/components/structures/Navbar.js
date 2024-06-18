import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { authActions } from "../../store/index.js";
import NavbarStyling from '../styles/Navbar.css'
import { login, logout, clock} from '../../store/index.js'

axios.defaults.withCredentials = true;

function NavScrollExample() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendLogoutRequest = async () => {
    try {
      const res = await axios.post("https://knightwatch.onrender.com/api/logout", null, {
        withCredentials: true,
      });
      if (res.status === 200) {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
    return new Error("Unable to logout! Please try again");
  };


  const handleLogout = () => {
    sendLogoutRequest().then(() => dispatch(authActions.logout()));
  };

  const handleClock = () => {
    dispatch(clock());
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid >
          <Navbar.Brand className="heading" href="/clock">KnightWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
            {isLoggedIn && <> <Nav.Link href="/user" onClick={handleClock}>Home</Nav.Link></>}
             <Nav.Link href="/description">Description</Nav.Link>
             <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://www.chess.com/" target="_blank">Chess.com</NavDropdown.Item>
                <NavDropdown.Item href="https://lichess.org/" target="_blank">Lichess.org</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Form className="d-flex islog">
              {!isLoggedIn && 
                <Link to={"/login"} className="no-dec">
                  <button
                    className="btn btn-outline-success header-btn islog"
                    type="submit"
                  >
                    LogIn
                  </button>
                </Link>
              }
              {!isLoggedIn && 
                <Link to={"/signup"} className="no-dec">
                  <button className="btn btn-outline-success islog" type="submit">
                    SignUp
                  </button>
                </Link>
              }
              {isLoggedIn && 
                <Link to={"/login"} className="no-dec">
                  <button
                    className="btn btn-outline-success isout"
                    type="submit"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </Link>
              }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`content ${menuOpen ? "shifted" : ""}`}></div>
    </React.Fragment>
  );
}

export default NavScrollExample;


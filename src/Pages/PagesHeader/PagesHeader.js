import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Sources/Images/logo-est.png'
import { Link } from "react-router-dom";
import './PagesHeader.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const PagesHeader = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div>
             <>
             <div bg="" variant="">
      <Navbar  className='navigation' bg="secondary" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} alt='images'></img></Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
            {
              user? (
                <>
                  <Nav.Link
                  as={Link} to="/manage">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link onClick={logout}>
                    <span style={{ color: "#FFF" }}>{user.displayName}</span>{" "}
                    Log Out
                  </Nav.Link>
                </>
              ) : 
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
        </div>
    );
};

export default PagesHeader;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Sources/Images/logo-est.png'
import { Link } from "react-router-dom";
import './PagesHeader.css'

const PagesHeader = () => {
    return (
        <div>
             <>
      <Navbar bg="secondary" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logo} alt='images'></img></Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
        </div>
    );
};

export default PagesHeader;
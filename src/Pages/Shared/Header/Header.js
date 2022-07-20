import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// Carousel
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../Sources/Images/fresh-fruit-delivery-in-gurgaon.jpg";
import slide2 from "../../../Sources/Images/online-vegetables-in-gurgaon.jpg";
// import slide3 from "../../../Sources/Images/online-vegetables-in-gurgaon.jpg";
// navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Sources/Images/logo-est.png";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      {/* NavBAr START*/}
      <>
        <Navbar bg="light" variant="light">
          <Container className="header-container">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="images"></img>
            </Navbar.Brand>
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/registration">
                Registration
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link
                  as={Link} to="/manage" style={{ fontWeight:'600' }}>
                    <i>Manage Items</i>
                  </Nav.Link>
                  
                  <Nav.Link onClick={logout}>
                    <span style={{ color: "#FE5C5C" }}>{user.displayName}</span>{" "}
                    Log Out
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </>
      {/* NavBAr END */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;

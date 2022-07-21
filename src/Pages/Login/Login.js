import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PagesHeader from "../PagesHeader/PagesHeader";
import "./Login.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;
  // useRef
  const emailRef = useRef(" ");
  const passwordRef = useRef(" ");
  const handleUserLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://sleepy-harbor-68407.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    console.log(data);
    // navigate(from, { replace: true });
  };
  //
  const handleRegister = () => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email Please Check Inbox!");
    } else {
      toast("Please Enter Email!");
    }
  };
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  // Redirection page
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  // Show loading
  if (loading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <PagesHeader></PagesHeader>
      <div style={{ width: "600px", margin: "50px auto" }}>
        <h1>Log in Please...</h1>
        <Form onSubmit={handleUserLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              ref={passwordRef}
                type="password"
                placeholder="Password"
             />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p style={{ color: "red" }}>{errorElement}</p>
          <Button variant="primary"
              type="submit">
            Login
          </Button>
        </Form>
        <p>
            New to Genius Car?
            <Link
              className="ps-2 text-decoration-none text-danger"
              to="/register"
              onClick={handleRegister}
            >
              Please Register!
            </Link>
          </p>
          <p>
            Forgot Password?
            <button
              className="btn btn-link ps-2 text-decoration-none text-danger"
              onClick={resetPassword}
            >
              Reset Password!
            </button>
          </p>
        {/* {errorElement} */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;

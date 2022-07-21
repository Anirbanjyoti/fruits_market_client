import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../Shared/Loading/Loading";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import PagesHeader from "../PagesHeader/PagesHeader";
import { Link } from "react-router-dom";

const Register = () => {
  // const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateEerror] = useUpdateProfile(auth);
  // const [token] = useToken(user);
  const [error, setError] = useState(" ");
  const [agree, setAgree] = useState(false);


  const handleCreateUser = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    // navigate("/home");

    if (!agree) {
      setError("Please checked the terms and condition!");
    }
    if (password !== confirmPassword) {
      setError("Your Password and Confirm Password does not match !");
      return;
    }
    if (password.length < 6) {
      setError("Password must be six character or more !");
      return;
    }
  };
  if(loading || updating){
    return <Loading></Loading>
  };
  return (
    <div>
    <PagesHeader></PagesHeader>
    <div style={{ width: "600px", margin:'50px auto' }}>
      <h1>Please Register...!</h1>
      <Form onSubmit={handleCreateUser}>
      <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                label="Accept Genius Car Terms and Condition"
                // Conditional css class
                // method one
                // className={agree ? 'text-primary' : 'text-danger'}
                // Method two
                className={`${agree ? "text-primary" : "text-danger"}`}

          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button disabled={!agree} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p>
            Already have an account?
            <Link className="ps-2 text-decoration-none" to="/login">
              Please Login!
            </Link>
          </p>
    </div>
    </div>
  );
};

export default Register;

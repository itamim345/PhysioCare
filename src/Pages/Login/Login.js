import React from "react";
import { Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    const passRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email,password)
    }
    const navigateToRegister = () => {
        navigate('/register');
    }
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ifNotRegister">
          <p>Haven't Registered yet ? please <span role="button" onClick={navigateToRegister} className="text-danger">Register</span></p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

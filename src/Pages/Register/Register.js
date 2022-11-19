import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='container w-50 my-4 border border-success p-3 rounded'>
      <h2 className='text-center text-success text-decoration-underline'>Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ifNotRegister">
          <p>Already Registered ? Please <span role="button" onClick={navigateToLogin} className="text-danger">Login</span></p>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

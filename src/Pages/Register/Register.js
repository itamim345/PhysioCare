import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

export default function Register() {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate('/login')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password)
    }
  return (
    <div className='container w-50 my-4 border border-success p-3 rounded'>
      <h2 className='text-center text-success text-decoration-underline'>Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
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

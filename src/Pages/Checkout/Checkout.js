import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Checkout() {
  return (
    <div className='container py-2'>
      <h2 className='text-center text-danger text-decoration-underline py-2'>Please Checkout your Booking</h2>
      <div>
      <Form className="w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicTransactionId">
        <Form.Label>Transaction ID</Form.Label>
        <Form.Control type="email" placeholder="Enter your transaction ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPaymentType">
        <Form.Label>Payment Via</Form.Label>
        <Form.Control type="text" placeholder="Paytm/PhonePe/GPay/Others" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Yor Contact Number" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  );
}

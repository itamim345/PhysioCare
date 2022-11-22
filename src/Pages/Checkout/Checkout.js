import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Checkout() {
  //For Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container py-2'>
      <h2 className='text-center text-danger text-decoration-underline py-2'>Please Checkout your Booking</h2>
      <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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

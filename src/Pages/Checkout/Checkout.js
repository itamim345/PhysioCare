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

      <div className="w-50 mx-auto">
        <Button variant="primary" onClick={handleShow} className="w-100">
          Get The Payment Details To Pay
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Pay Using Any Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Paytm: 9797979797@paytm</h6>
          <hr></hr>
          <h6>PhonePe: 9797979797@ybl</h6>
          <hr></hr>
          <h6>Gpay: 9797979797@gpay</h6>
          <hr></hr>
          <h5>Bank Details:- State Bank Of India
          </h5>
          <p>
            Name: Physiocare Private Limited,
            Account NO: 9797979797979, IFSC: SBIN000111
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
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
        <Form.Label>Payment Method</Form.Label>
        <Form.Control type="text" placeholder="Paytm/PhonePe/GPay/Bank Transfer" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Contact Number" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Attach Your Payment Proof</Form.Label>
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

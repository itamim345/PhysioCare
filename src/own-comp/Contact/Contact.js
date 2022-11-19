import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Contact() {
  return (
    <div className='container pb-4'>
      <Alert variant="success">
      <h2>Get In <span className='text-danger'>Touch</span></h2>
      <hr />
      <h5>Name: John Doe</h5>
      <h6>Email: john@gmail.com</h6>
      <h6>Whatsapp: +91 9779797979</h6>
      <address>Action Area II, Plot No.- IIA/27, Newtown, Kolkata, West Bengal 700156</address>
      
      <hr />
      <p className="mb-0">
        Whenever you need, Never hesitate to contact, I will be really happy If I can help you.
      </p>
    </Alert>
    </div>
  );
}

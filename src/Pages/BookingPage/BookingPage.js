import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function BookingPage() {
    const {bookingId} = useParams()
  return (
    <div className='py-4 container text-center'>
      <h2 className='text-danger text-decoration-underline'>Review your Booking and Checkout</h2>
      <h4>Your Booking id : {bookingId}</h4>
      <Link to="/checkout">
        <Button>Process to checkout</Button>
      </Link>
    </div>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookingPage() {
    const {bookingId} = useParams()
  return (
    <div>
      <h2>Review your Booking and then Checkout</h2>
      <h4>Your Booking id : {bookingId}</h4>
    </div>
  );
}

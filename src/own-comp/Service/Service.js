import React from 'react';
import './Service.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Service(props) {
  const {id,title, desription, duration, price, timing, img} = props.service;
  const navigate = useNavigate();
  const navigateToBooking = (id) => {
    navigate(`/booking/${id}`);
  }
  return (
    <div className='single-service'>
      <img src={img} alt={title + " image"} />
      <h3>{title}</h3>
      <p><small>{desription}</small></p>
      <p>Package: {price}</p>
      <p>Duration: {duration}</p>
      <p>Timing: {timing}</p>
      <Button variant="danger" className='my-2' onClick={() => navigateToBooking(id)}>Book Now</Button>{' '}
    </div>
  );
}

import React from 'react';
import './Service.css'

export default function Service(props) {
  const {title, desription, duration, price, timing, img} = props.service;
  return (
    <div className='single-service'>
      <img src={img} alt={title + " image"} />
      <h3>{title}</h3>
      <p><small>{desription}</small></p>
      <p>Package: {price}</p>
      <p>Duration: {duration}</p>
      <p>Timing: {timing}</p>
      <button>Subscribe Now</button>
    </div>
  );
}

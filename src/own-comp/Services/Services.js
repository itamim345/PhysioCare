import React from 'react';
import { useState, useEffect } from 'react';

function Services() {
  const [services,setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(resp => resp.json())
    .then(data => setServices(data))
},[])
  return (
    <div>
      {
        services.map(service => <h2>{service.title}</h2>)
      }
    </div>
  );
}

export default Services;

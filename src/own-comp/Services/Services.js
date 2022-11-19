import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'

function Services() {
  const [services,setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(resp => resp.json())
    .then(data => setServices(data))
},[])
  return (
    <div className='container pb-4 text-center'>
        <h2 className='pb-3'>Our <span className='text-danger'>Services</span></h2>
      <div className="services-container">
        {
            services.map(service => <Service key={service.id} service={service}/>)
        }
      </div>
    </div>
  );
}

export default Services;

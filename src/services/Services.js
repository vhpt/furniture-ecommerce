import React from 'react';
import './Services.css';

import serviceData from '../assets/data/serviceData';

const Services = () => {
    return (
        <div className='container mt-2'>
            <div className='row'>
                {serviceData.map((item, index) => (
                    <div className='col-md-3 mt-3 motion mx-4' style={{ backgroundColor: `${item.bg}`, width: '280px', borderRadius: "8px" }} key={index}>
                    <div style={{ display: 'flex', padding:'10px' }}>
                        <i className={item.icon} style={{ fontSize: '22px', marginRight: '10px'}}></i>
                        <div className='txtService'>
                            <h5>{item.title}</h5>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export default Services

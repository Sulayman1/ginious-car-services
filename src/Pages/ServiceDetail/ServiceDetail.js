import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>wellcome to detail: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/cheakout"><button className='btn btn-primary'>Proceed Cheakout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
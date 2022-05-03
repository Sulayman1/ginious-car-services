import React from 'react';
import { Card } from 'react-bootstrap';

const Expart = ({ expart }) => {

    const { name, img } = expart;

    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>
            <div className='card' style={{ width: "20rem" }}>
                <Card >
                    <Card.Img style={{ height: "20rem" }} variant="top" src={img} />
                    <Card.Title>Name: {name}</Card.Title>
                </Card>
            </div>
        </div>
    );
};

export default Expart;
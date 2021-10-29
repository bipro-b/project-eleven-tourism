import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Spot from '../Spot/Spot';


const Services = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('/spots.json')
            .then(res => res.json())
            .then(data => setSpots(data));
    }, [])
    return (
        <div className="my-5">
            <h3>Tourism spots</h3>
            <Container className="mb-4">
                <Row sm={1} md={2} lg={3} className="g-3">

                    {
                        spots.map(spot => <Spot key={spot.id} spot={spot}></Spot>)
                    }


                </Row>
            </Container>
            <button className="btn btn-success">Add New Place</button>
        </div>
    );
};

export default Services;
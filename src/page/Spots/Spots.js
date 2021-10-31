import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spot from '../Spot/Spot';


const Services = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-zombie-24500.herokuapp.com/spots')
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
            <Link to="/addnew">  <button className="btn btn-success">Add New Place</button></Link>
        </div>
    );
};

export default Services;
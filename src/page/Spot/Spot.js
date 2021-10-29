import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Spot = (props) => {
    const { spot, img, cost, description, id } = props.spot;
    return (
        <div>

            <Container className="">
                <Col className="ms-5">
                    <Card className="card h-100 w-75">
                        <Card.Img style={{ height: '150px' }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Diseases: {spot}
                            </Card.Title>
                            <p> {description}</p>
                            <h4>Cost {cost}</h4>
                            <Link to={`/spot/${id}`}> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Contact Now</button></Link>
                        </Card.Body>



                    </Card>


                </Col>
            </Container>
        </div>
    );
};

export default Spot;
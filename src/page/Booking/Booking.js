import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Booking = () => {
    const { user } = useAuth();
    const { spotId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
    useEffect(() => {
        fetch('/spots.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const foundDoctor = details.find(
            serv => serv.id === spotId
        );
        setBookDetails(foundDoctor);
    }, [details, spotId])
    console.log(bookDetails);
    return (
        <>
            <Header></Header>
            <div className="mx-auto">
                <div className="Row">
                    <div className="Col-6">
                        <img src={user.photoURL} alt="" />
                        <h2>Hey {user?.displayName} Welcome</h2>

                    </div>
                    <div className="Col-6">
                        <Container>
                            <Col className="ms-5">
                                <Card className="card h-100 w-50">
                                    <Card.Img style={{ height: '250px' }} variant="top" src={bookDetails?.img} />
                                    <Card.Body>
                                        <Card.Title>Diseases: {bookDetails?.spot}
                                        </Card.Title>
                                        <p> {bookDetails?.description}</p>
                                        <p> cell phone: {bookDetails?.cost}</p>
                                        <Link to="/managetour"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Manage Tour</button></Link>
                                    </Card.Body>



                                </Card>


                            </Col>
                        </Container>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Booking;
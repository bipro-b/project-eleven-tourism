import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();
    const { spotId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch('https://shrieking-zombie-24500.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const choosenSpot = details.find(
            serv => serv._id === spotId
        );
        setBookDetails(choosenSpot);
    }, [details, spotId])
    console.log(bookDetails);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://shrieking-zombie-24500.herokuapp.com/tourist', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }



    return (
        <>
            <Header></Header>
            <div className="mx-auto">

                <div className="">
                    <img src={user.photoURL} alt="" />
                    <h2>Hey "{user?.displayName}" Welcome</h2>

                </div>
                <div className="">
                    <Container>
                        <Col className="ms-5">
                            <Card className="card h-100 w-auto">
                                <Card.Img style={{ height: '500px', width: '' }} variant="top" src={bookDetails?.img} />
                                <Card.Body>
                                    <Card.Title>Place: {bookDetails?.spot}
                                    </Card.Title>
                                    <p> {bookDetails?.description}</p>
                                    <p>   Cost: {bookDetails?.cost} ৳</p>
                                    <Link to="/manageselection"><button className="btn btn-primary">Manage</button></Link>
                                </Card.Body>



                            </Card>


                            <div className="details">
                                <h3>Submit your information</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} />
                                    <input defaultValue={user.email} {...register("email", { required: true, maxLength: 50 })} />

                                    <textarea defaultValue={bookDetails?.description} {...register("description")} />
                                    <input type="address" {...register("address")} placeholder="address" />
                                    <input type="address" {...register("city")} placeholder="city" />
                                    <input type="number" {...register("phone")} placeholder="your phone number" />

                                    <input type="submit" />
                                </form>

                            </div>


                        </Col>
                    </Container>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Booking;
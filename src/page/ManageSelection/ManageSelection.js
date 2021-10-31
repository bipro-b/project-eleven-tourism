import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ManageSelection = () => {
    const { spotId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});
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


    return (
        <>
            <Header></Header>
            <div>

                <h3>You may delete your selection place</h3>

                <Card className="card h-100 w-auto">
                    <Card.Img style={{ height: '500px', width: '' }} variant="top" src={bookDetails?.img} />
                    <Card.Body>
                        <Card.Title>Place: {bookDetails?.spot}
                        </Card.Title>
                        <p> {bookDetails?.description}</p>


                    </Card.Body>



                </Card>


            </div>
            <Footer></Footer>
        </>
    );
};

export default ManageSelection;
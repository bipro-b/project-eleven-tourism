import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ManageTour = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-zombie-24500.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])

    // delete an booked tour
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://shrieking-zombie-24500.herokuapp.com/spots/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = tours.filter(tour => tour._id !== id);
                        setTours(remaining);
                    }

                })
        }
    }

    return (
        <>
            <Header></Header>
            <div>
                <h3>Manage tours</h3>
                {
                    tours.map(tour => <div key={tour._id}>
                        <h3>{tour.spot}</h3>
                        <button onClick={() => handleDelete(tour._id)} className="btn btn-primary">Delete</button>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default ManageTour;
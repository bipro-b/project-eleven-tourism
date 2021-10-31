import React from 'react';

import './Footer.css'

const Footer = () => {
    return (

        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h2>Study Tour</h2>
                    <p>Hey book here to enjoy.</p>
                    authority©. ALl rights reseves.
                </div>
                <div className="col-md-4">
                    <h2>Our Tou places</h2>
                    <ul className=" mx-auto">
                        <li>Sitakundu</li>
                        <li>Srimangal</li>
                        <li>Coxs bazar</li>
                        <li>syhlet</li>
                        <li>Kua Kata</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Contact with us</h3>
                    <p> Email:b@yahoo.com</p>
                    <p> Phone number: 8989-7878-9090</p>
                    <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                        <i class="fab fa-facebook"></i>
                        <i class="fas fa-envelope-open-text"></i>
                        <i class="fas fa-phone-volume"></i>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer; <h3>From footer</h3>
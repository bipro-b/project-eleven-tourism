import React from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">

            <div className="row">
                <div className="col-md-6 first-part">
                    <h2>Welcome to</h2>
                    <h2> <span className="text-info">Study tout</span> Page.</h2>

                    <p>To get relax and to increase work effeciency some times we should enjoy our vacation with study tour. Study tour remove our monotonous and give a mental relax which give us flexibility to work </p>
                    <h4>We hope you will enjoy with us. </h4>

                </div>
                <div className="col-md-6 second-part">
                    <img className="img img-fluid" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
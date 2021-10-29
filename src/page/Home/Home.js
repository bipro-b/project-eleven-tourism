import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Spots from '../Spots/Spots';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Spots></Spots>
            <Footer></Footer>
        </div>
    );
};

export default Home;
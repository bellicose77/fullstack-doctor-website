import React from 'react';
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Info/>
        </div>
    );
};

export default Home;
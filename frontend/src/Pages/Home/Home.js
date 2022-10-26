import React from 'react';
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;
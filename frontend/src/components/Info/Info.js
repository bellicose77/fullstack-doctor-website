import React from 'react';
import Infocard from '../Infocard/Infocard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-3 gap-5 px-12">
            <Infocard img={clock} cardtitle="Opening hour" bgClass="bg-gradient-to-r from-secondary to-primary"/>
            <Infocard img={marker} cardtitle="visit our Location" bgClass="bg-accent"/>
            <Infocard img={phone} cardtitle="Contact" bgClass="bg-gradient-to-r from-secondary to-primary"/>
        </div>
    );
};

export default Info;
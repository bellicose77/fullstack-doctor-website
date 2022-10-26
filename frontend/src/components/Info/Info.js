import React from 'react';
import Infocard from '../Infocard/Infocard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div class="grid grid-cols-3 gap-5">
            <Infocard img={clock} cardtitle={"Opening hour"}/>
            <Infocard img={marker} cardtitle={"visit our Location"}/>
            <Infocard img={phone} cardtitle={"Contact"}/>
        </div>
    );
};

export default Info;
import React from 'react';
import Infocard from '../Infocard/Infocard';
import img from '../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div class="grid grid-cols-3 gap-5">
            <Infocard img={img} cardtitle={Opening}/>
            <Infocard img={img} cardtitle={location}/>
            <Infocard img={img} cardtitle={Contact}/>
        </div>
    );
};

export default Info;
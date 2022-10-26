import React from 'react';
import floried from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id:1,
            title:'Floried treatment',
            desc:"There is big discount",
            img:floried
        },
        {
            _id:2,
            title:'Cavitiy filling',
            desc:"do ti quicly",
            img:cavity

        },
        {
            _id:3,
            title:'Teeth Whiting',
            desc:"got a surprise",
            img:teeth
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div>
        
                {
                    services.map(service => <Service 
                        key={service._id} 
                        service={service}
                        >

                        </Service>)
                }
            </div>
        </div>
    );
};

export default Services;
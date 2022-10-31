import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{background:`url(${appoinment})`}}
        
        >
            <div className='flex-1'>
                <img src={doctor}/>

            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an Appoinment today</h2>
                <p>There is a good doctor who can uproot your teeth
                </p>
                <PrimaryButton></PrimaryButton>

            </div>
            
        </section>
    );
};

export default MakeAppointment;
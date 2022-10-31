import React from 'react';
import doctor from '../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section>
            <div>
                <img src={doctor}/>

            </div>
            <div>
                <h3>Appoinment</h3>
                <h2>Make an Appoinment today</h2>
                <p>There is a good doctor who can uproot your teeth
                </p>

            </div>
            
        </section>
    );
};

export default MakeAppointment;
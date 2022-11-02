import React from 'react';
import { format } from 'date-fns';

const AvailAppointment = (props) => {
    const date = props.date;
    return (
        <div>
            <h4>Available Appointments on :{format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailAppointment;
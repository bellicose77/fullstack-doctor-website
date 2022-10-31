import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What our patients says</h2>

                </div>
                <div>
                    <img src={quote}/>

                </div>

            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;
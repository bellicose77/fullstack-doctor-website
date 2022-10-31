import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What our patients says</h2>

                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48'/>

                </div>

            </div>
            
            <div>

            </div>
        </section>
    );
};

export default Testimonial;
import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:"Windos henrry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'London',
            img:people1

        },
        {
            _id:2,
            name:"Windos henrry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'London',
            img:people2

        },
        {
            _id:3,
            name:"Windos henrry",
            desc:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'London',
            img:people3

        }
    ]
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
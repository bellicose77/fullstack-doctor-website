import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
          <div class="hero-content flex-col lg:flex-row-reverse">
           <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts</h1>
      <p class="py-6"> lorem10
      </p>
      <PrimaryButton></PrimaryButton>
      
    </div>
  </div>
</div>
    );
};

export default Banner;
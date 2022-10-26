import React from 'react';

const Infocard = ({img}) => {
    return (
    <div class="card card-side bg-base-100 shadow-xl bg-accent">
     <figure><img src={img} alt="Movie"/></figure>
    <div class="card-body text-white">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
  </div>
</div>
    );
};

export default Infocard;
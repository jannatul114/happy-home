import React from 'react';
import banner from '../../../images/Image/banner.png';
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-secondary">
                <div class="hero-content flex-col justify-between lg:flex-row gap-y-4">
                    <div className='mx-w-full lg:mx-w-xl'>
                        <h1 class="text-6xl font-bold text-primary max-w-xl">We Build <br /> Your Dreame!</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary text-white mb-5">Booking</button>
                    </div>
                    {<img src={banner} class="max-w-sm lg:max-w-lg shadow-2xl" /> ? <img src={banner} class="max-w-sm lg:max-w-lg shadow-2xl" /> : <img src="https://dev-to-uploads.s3.amazonaws.com/i/gqmymopg8bignlcfhvcx.gif" class="max-w-sm lg:max-w-lg shadow-2xl" />}

                </div>
            </div>
        </div>
    );
};

export default Banner;
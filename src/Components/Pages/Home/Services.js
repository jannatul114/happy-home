import React from 'react';
import icon1 from '../../../images/Icon/affordable 1.png';
import icon2 from '../../../images/Icon/apartment 1.png';
import icon3 from '../../../images/Icon/lessee 1.png';
const Services = () => {
    return (
        <div className='m-3'>
            <p className='text-primary text-center'>services</p>
            <h1 className='text-3xl text-center font-bold text-primary mb-5'>We're an agency tailored to all <br /> clients' needs that always delivers</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-5'>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div className='flex justify-center'>
                                <img src={icon1} width={'100'} alt="" />
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Office Interior Design</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div className='flex justify-center'>
                                <img src={icon2} width={'100'} alt="" />
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Showroom Design</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl min-h-80">
                        <figure class="px-10 pt-10">
                            <div className='flex justify-center'>
                                <img src={icon3} width={'100'} alt="" />
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Residential/ Home</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center mt-3'>
                <button className='my-6 rounded-none btn btn-primary text-white'>Explore More </button>

            </div>
        </div>
    );
};

export default Services;
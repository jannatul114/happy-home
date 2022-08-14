import React from 'react';
import project1 from '../../../images/Image/project-11.png';
import project2 from '../../../images/Image/project-2.png';
import project3 from '../../../images/Image/project-3.png';
const Projects = () => {
    return (
        <div>
            <div className='my-4'>
                <p className='text-primary text-center'>Projects</p>
                <h1 className='text-3xl text-center font-bold text-primary '>Discover the latest Interior Design <br /> available today</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-6'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <img src={project1} width={'305'} height={''} alt="" />
                        </div>
                        <div className='flex justify-center my-3'>
                            <svg className='text-primary w-5 h-5' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <p className='ml-2'> Dhaka, Bangladesh</p>
                        </div>

                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <img src={project2} width={'360'} height={'100%'} alt="" />
                        </div>
                        <div className='flex justify-center my-3'>
                            <svg className='text-primary w-5 h-5' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <p className='ml-2'> Dhaka, Bangladesh</p>
                        </div>

                    </div>
                    <div className=''>
                        <div className='flex justify-center'>
                            <img src={project3} width={'305'} height={''} alt="" />
                        </div>
                        <div className='flex justify-center my-3'>
                            <svg className='text-primary w-5 h-5' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <p className='ml-2'> Dhaka, Bangladesh</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
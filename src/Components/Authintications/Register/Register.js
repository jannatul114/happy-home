import React from 'react';
import google from '../../../images/Icon/Google.png';
import logo from '../../../images/Group 33069.png';
import { Link } from 'react-router-dom';
const Registar = () => {
    return (
        <div>
            <div className='my-14 mx-3'>
                <div className='mx-auto max-w-[400px] border-2 border-base-200 p-3'>
                    <h1 className='text-2xl font-bold text-center text-primary mb-5 pl-4'>Create Account</h1>

                    <div className='flex justify-center my-4'>
                        <img src={logo} width={'100'} alt="" />
                    </div>
                    <div className=''>
                        <form>
                            <div className='flex justify-center'>
                                <input type="text" placeholder="First Name" class="input border-b border-primary w-full max-w-xs" />
                            </div>

                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Last Name" class="input border-b border-primary w-full max-w-xs" />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Email" class="input border-b border-primary w-full max-w-xs" />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Confirm Password" class="input border-b border-primary w-full max-w-xs" />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Password" class="input border-b border-primary w-full max-w-xs" />
                            </div>


                            <div className='flex justify-center'>
                                <button className='btn btn-primary rounded-none text-white '>Create</button>
                            </div>
                        </form>
                    </div>


                </div>
                <div className='flex justify-center my-4'>
                    <button className='btn btn-outline bg-white hover:bg-base-200 border-2 rounded-3xl border-base-200 m-2 p-2 w-80 flex justify-between'>
                        <img src={google} width={'30'} alt="" />
                        <p className=' text-primary'> Sign-in with Google</p>
                        <p className=' text-primary'></p>
                    </button>
                </div>
                <p className='text-center text-primary'>Already have an account? <Link className='list-dise' to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Registar;
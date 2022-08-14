import React from 'react';
import logo from '../../../images/Group 33069.png';
import google from '../../../images/Icon/Google.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='my-14'>
            <h1 className='text-center text-4xl font-bold text-primary'>Login</h1>
            <div className='flex justify-center my-4'>
                <img src={logo} width={'100'} alt="" />
            </div>
            <div className='w-72 mx-auto'>
                <button className='btn btn-outline bg-white hover:bg-base-200 border-2 rounded-3xl border-primary m-2 p-2 w-80 flex justify-between'>
                    <img src={google} width={'30'} alt="" />
                    <p className=' text-primary'> Sign-in with Google</p>
                    <p className=' text-primary'></p>
                </button>
                <p className='text-center text-primary'>Don't have any account? <Link className='list-dise' to={'/registar'}>Regiaster</Link></p>
            </div>
        </div>
    );
};

export default Login;
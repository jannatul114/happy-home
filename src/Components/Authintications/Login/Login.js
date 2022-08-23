import React from 'react';
import logo from '../../../images/Group 33069.png';
import google from '../../../images/Icon/Google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRef } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    useEffect(() => {
        if (error || gError) {
            toast.error(error?.message || gError?.message)
        }
    }, [error, gError])

    if (user || gUser) {
        navigate('/home')
    }

    if (loading || gLoading) {
        return <Loading />
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (

        // <div className='my-14'>
        //     <h1 className='text-center text-4xl font-bold text-primary'>Login</h1>
        //     <div className='flex justify-center my-4'>
        //         <img src={logo} width={'100'} alt="" />
        //     </div>

        //     <div className='mx-auto border-primary w-1/2'>
        //         <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
        //     </div>
        //     <div className='w-72 mx-auto'>
        //         <div className='w-80'>
        //         </div>
        //         <button className='btn btn-outline bg-white hover:bg-base-200 border-2 rounded-3xl border-primary m-2 p-2 w-80 flex justify-between'>
        //             <img src={google} width={'30'} alt="" />
        //             <p className=' text-primary'> Sign-in with Google</p>
        //             <p className=' text-primary'></p>
        //         </button>
        //         <p className='text-center text-primary'>Don't have any account? <Link className='list-dise' to={'/registar'}>Regiaster</Link></p>
        //     </div>
        // </div>
        <div className='my-14 mx-3'>
            <div className='mx-auto max-w-[400px] border-2 border-base-200 p-3'>
                <div className='flex justify-center my-4'>
                    <img src={logo} width={'100'} alt="" />
                </div>
                <h1 className='text-2xl font-bold text-center text-primary mb-5 pl-4'>Login</h1>


                <div className=''>
                    <form onSubmit={handleLogin} >
                        <div className='flex justify-center'>
                            <input ref={emailRef} type="text" placeholder="Email" class="input border-b border-primary w-full max-w-xs rounded-none" name='email' required />
                        </div>

                        <div className='flex justify-center my-7'>
                            <input ref={passwordRef} type="text" placeholder="Password" class="input border-b border-primary w-full max-w-xs rounded-none" name='password' required />
                        </div>


                        <div className='flex justify-center'>
                            <button className='btn btn-primary rounded-none text-white '>Login</button>
                        </div>
                    </form>
                </div>


            </div>
            <div className='flex justify-center my-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline bg-white hover:bg-base-200 border-2 rounded-3xl border-base-200 m-2 p-2 w-80 flex justify-between'>
                    <img src={google} width={'30'} alt="" />
                    <p className=' text-primary'> Sign-in with Google</p>
                    <p className=' text-primary'></p>
                </button>
            </div>
            <p className='text-center text-primary'>Don't have any account? <Link className='list-dise' to={'/register'}>Regiaster</Link></p>
        </div>
    );
};

export default Login;
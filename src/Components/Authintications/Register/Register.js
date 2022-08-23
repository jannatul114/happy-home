import React from 'react';
import google from '../../../images/Icon/Google.png';
import logo from '../../../images/Group 33069.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const Registar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (error || gError || updateError) {
            toast.error(error?.message || gError?.message || updateError?.message)
        }
    }, [error, gError || updateError])


    if (user || gUser) {
        navigate('/home')
        console.log(user || gUser)
    }
    if (loading || updating) {
        toast.info("loading...")
    }


    const handleRegister = async event => {
        event.preventDefault();
        const name = firstNameRef.current.value + ' ' + lastNameRef.current.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPassword.value;

        if (password === confirmPass) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name })
            toast.success('succefully created account')
        }
        else {
            toast.error('confirm password did not matched! try again')
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }


    return (
        <div>
            <div className='my-14 mx-3'>
                <div className='mx-auto max-w-[400px] border-2 border-base-200 p-3'>
                    <div className='flex justify-center my-4'>
                        <img src={logo} width={'100'} alt="" />
                    </div>
                    <h1 className='text-2xl font-bold text-center text-primary mb-5 pl-4'>Create Account</h1>


                    <div className=''>
                        <form onSubmit={handleRegister}>
                            <div className='flex justify-center'>
                                <input ref={firstNameRef} type="text" placeholder="First Name" class="input border-b border-primary w-full max-w-xs rounded-none" required />
                            </div>

                            <div className='flex justify-center my-7'>
                                <input ref={lastNameRef} type="text" placeholder="Last Name" class="input rounded-none border-b border-primary w-full max-w-xs" required />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="email" name='email' placeholder="Email" class="input border-b border-primary rounded-none w-full max-w-xs" required />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Password" class="input rounded-none border-b border-primary w-full max-w-xs" name='password' required />
                            </div>
                            <div className='flex justify-center my-7'>
                                <input type="text" placeholder="Confirm Password" class="input border-b border-primary rounded-none w-full max-w-xs" name='confirmPassword' required />
                            </div>


                            <div className='flex justify-center'>
                                <button className='btn btn-primary rounded-none text-white '>Create</button>
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
                <p className='text-center text-primary'>Already have an account? <Link className='list-dise' to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Registar;
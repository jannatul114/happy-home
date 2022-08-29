import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Profile = () => {
    const [user] = useAuthState(auth);

    // const { data: updatedUser, isLoading, refetch } = useQuery(['dbuser'], () => fetch(`https://immense-spire-60871.herokuapp.com/users/${user.email}`).then(res =>
    //     res.json())
    // )
    // if (isLoading) {
    //     return <Loading />
    // }

    // const handleEditProfile = event => {
    //     event.preventDefault()
    //     const name = event.target.name.value || updatedUser?.displayName || '';
    //     const city = event.target.city.value || updatedUser?.city || '';
    //     const state = event.target.state.value || updatedUser?.state || '';
    //     const company = event.target.company.value || updatedUser?.company || '';
    //     const occupation = event.target.occupation.value || updatedUser?.occupation || '';
    //     const language = event.target.language.value || updatedUser?.language || '';
    //     const phone = event.target.phone.value || updatedUser?.phone || '';
    //     const experiance = event.target.experiance.value || updatedUser?.experiance || '';
    //     const country = event.target.country.value || updatedUser?.experiance || '';

    //     const users = { name, city, state, company, occupation, language, phone, experiance, country };
    //     fetch(`https://immense-spire-60871.herokuapp.com/users/${user.email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',

    //         },
    //         body: JSON.stringify(users)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             refetch()
    //             console.log(data);
    //             toast.success('successfully updated')
    //             event.target.reset()
    //         })

    // }
    return (
        <div>
            <div class="bg-gray-100 h-full">
                <div class="container mx-auto my-5 p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">

                        <div class="w-full md:w-1/2 md:mx-2">

                            <div class="bg-white rounded-3xl p-5 shadow-lg my-3">
                                <div class="image overflow-hidden flex justify-center ">
                                    {
                                        user ? <img height={'150px'} width={'150px'} src={user?.photoURL} alt="" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" />
                                    }
                                </div>

                                {/* <div class="my-4">
                                    <h1 className='text-primary py-3 text-2xl text-center font-bold'></h1>
                                </div> */}
                                <div className=''>
                                    <div class="my-2">
                                        <h2 className='text-3xl my-4 text-center'>{user?.displayName ? user.displayName : "Not Abailable"}</h2>
                                        <h1 className='py-3 text-sm p-2 font-bold'>Email : {user ? user.email : 'Not Available'} <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                    </div>

                                </div>
                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Address :  <span className='text-primary py-3 text-sm p-2 font-bold'> </span> </h1>
                                </div>

                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Company : <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                </div>
                                {/* <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Phone : <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                </div>
                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Language : <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                </div> */}

                                <div className='flex justify-between'>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Phone: <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                    </div>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Language:  <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                    </div>
                                </div>


                                {/* <div className='flex justify-between'>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Experiance: <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                    </div>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Language: <span className='text-primary py-3 text-sm p-2 font-bold'></span> </h1>
                                    </div>

                                </div> */}
                            </div>
                        </div>






                        <div class="w-full md:w-9/12 mx-2 h-69">
                            <div class="bg-white py-12 px-2 shadow-xl my-4 rounded-xl">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide text-xl">Profile</span>
                                </div>
                                <div class="text-gray-700 mt-3 p-3">
                                    <form >
                                        <div class="grid md:grid-cols-2 text-sm lg:gap-3">
                                            <div>
                                                <h2 className='my-2 font-bold text-lg text-primary'>Name :</h2>
                                                <input type="text" placeholder="Name" name='name' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Phone :</h2>
                                                <input type="text" placeholder="Phone No" name='phone' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-2 text-center font-bold text-lg text-primary'>Address :</h2>
                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                                                    <input type="text" placeholder="Country" name='country' class="input input-bordered w-full max-w-xs" />

                                                    <input type="text" placeholder="City" name='city' class="input input-bordered w-full max-w-xs" />

                                                    <input type="text" placeholder="State" name='state' class="input input-bordered w-full max-w-xs" />
                                                </div>
                                            </div>


                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Company :</h2>
                                                <input type="text" placeholder="Company" name='company' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            {/* <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Occupation:</h2>
                                                <input type="text" placeholder="Occupation" name='occupation' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Years Of Experiance:</h2>
                                                <input type="text" placeholder="Year" name='experiance' class="input input-bordered w-full max-w-xs" />
                                            </div> */}
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Language :</h2>
                                                <input type="text" placeholder="Language" name='language' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div className='flex justify-end'>
                                                <input type={'submit'} value={"Save"} className='btn btn-primary mt-10 text-white' />
                                            </div>
                                        </div>



                                    </form>
                                </div>

                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
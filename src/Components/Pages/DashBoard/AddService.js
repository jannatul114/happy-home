import React from 'react';
import { faCartShopping, faList, faMessage, faListCheck, faPlus, faDashboard, faUserPlus, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AddService = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl font-semibold my-6 text-center'><FontAwesomeIcon className='mr-2' icon={faPlus} /> Add Service</h1>
            <div className='flex justify-center'>
                <div className='bg-white w-[700px] sm:max-w-200 py-7 sm:h-[350px] h-[500px]  flex justify-center mx-auto rounded-sm my-3'>


                    <form>
                        <div>
                            {/* <h2 className='my-2 text-center font-bold text-lg text-primary'>Address:</h2> */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 mb-4'>

                                <div className=''>
                                    <span className='text-1xl text-primary my-4 font-semibold'>Service Title</span>
                                    <input type="text" placeholder="title" name='title' class="input input-bordered w-full" />
                                </div>
                                <div className=''>
                                    <span className='text-1xl text-primary my-4 font-semibold'>Image</span>
                                    <input type="text" placeholder="image" name='image' class="input input-bordered w-full " />
                                </div>
                            </div>
                            <span className='text-1xl text-primary my-4 font-semibold mt-4'>Detailse</span>
                            <textarea className=' p-3 border-2 textarea border-base-200 w-full' placeholder="details"></textarea>
                            <div className='flex justify-end my-4'>
                                <button type='submit' className='btn btn-primary text-white rounded-none'><FontAwesomeIcon className='mr-2' icon={faPlus} /> Add</button>
                            </div>
                        </div>
                    </form>



                    {/* <div className='m-3'>
                        <div className='flex-col sm:flex-row justify-between '>
                            <div>
                                <span className='text-1xl font-semibold text-primary my-3'>Service Title</span>
                                <input type="text" placeholder="service Name" class="input w-full max-w-xs rounded-none mt-3 border-2 border-base-200" />
                            </div>
                            <div >
                                <span className='text-1xl text-primary my-4 font-semibold'>Image</span>
                                <input type="text" placeholder="" class="input w-full max-w-xs rounded-none border-2 mt-3 border-base-200" />
                            </div>
                        </div>
                        <div className='flex flex-col mt-3 '>
                            <span className='text-1xl text-primary my-3 font-semibold'>Description</span>
                            <textarea className=' p-3 border-2 textarea border-base-200' placeholder="details"></textarea>
                        </div>

                        <div className='flex justify-end my-4'>
                            <button className='btn btn-primary text-white rounded-none'><FontAwesomeIcon className='mr-2' icon={faPlus} /> Add</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AddService;
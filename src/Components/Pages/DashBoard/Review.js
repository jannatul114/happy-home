import React from 'react';
import { faCartShopping, faList, faMessage, faListCheck, faPlus, faDashboard, faUserPlus, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Review = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl font-semibold my-6 text-center'>Give a Review please! <FontAwesomeIcon icon={faSmileWink} /></h1>
            <div className='flex justify-center items-center h-full'>

                <form className='sm:w-[400px] w-[250px] '>
                    <input type="text" placeholder="Name" class="bg-white input w-full textarea-bordered rounded-none  p-3" />
                    <input type="text" placeholder="Company’s name, Designation" class="bg-white input w-full  p-3 rounded-none my-3 textarea-bordered" />
                    <textarea class="textarea textarea-bordered p-3 w-full rounded-none" placeholder="Bio"></textarea>

                    <button className='btn btn-primary text-white rounded-none my-3'><FontAwesomeIcon className='mr-2' icon={faMessage} /> Post </button>
                </form>
            </div>
        </div>
    );
};

export default Review;
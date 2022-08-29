import React from 'react';
import { faCartShopping, faList, faMessage, faListCheck, faPlus, faDashboard, faUserPlus, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const MakeAdmin = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl font-semibold my-6 text-center'>Make Admin</h1>
            <div className='flex justify-center'>
                <div className='bg-white w-[500px] py-14 px-12 m-3 flex mx-auto rounded-sm'>
                    <input type="text" placeholder="email@gmail.com" class="input w-full max-w-xs border-2 border-base-200 rounded-none" />
                    <button className='btn btn-primary ml-3 text-white rounded-none'> <FontAwesomeIcon icon={faUserPlus} /> </button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
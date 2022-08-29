import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faList, faMessage, faListCheck, faPlus, faDashboard, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const DashBoard = () => {

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col bg-info ">
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                {/* <h1>dashBorad</h1> */}
                <Outlet />

            </div>

            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-primary ">
                    <li className='mt-4'><NavLink to={'/dashboard/book'}><FontAwesomeIcon icon={faCartShopping} /> Book</NavLink></li>

                    <li className='mt-4'><NavLink to={'/dashboard/bookingList'}> <FontAwesomeIcon icon={faList} /> Booking List</NavLink></li>

                    <li className='mt-4'><NavLink to={'/dashboard/review'}> <FontAwesomeIcon icon={faMessage} /> Add Review</NavLink></li>

                    <li className='mt-4'><NavLink to={'/dashboard/orderList'}> <FontAwesomeIcon icon={faListCheck} /> Order List</NavLink></li>
                    <li className='mt-4'><NavLink to={'/dashboard/makeAdmin'}> <FontAwesomeIcon icon={faUserPlus} /> Make Admin</NavLink></li>
                    <li className='mt-4'><NavLink to={'/dashboard/addService'}> <FontAwesomeIcon icon={faPlus} /> Add Service</NavLink></li>
                    <li className='mt-4'><NavLink to={'/dashboard/manageService'}> <FontAwesomeIcon icon={faDashboard} /> Manage Service</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;

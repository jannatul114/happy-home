import React from 'react';
import logo from '../../../../src/images/Group 33069.png'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUser, faHome, faUserGroup, faDashboard, faPhone } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user?.photoURL);

    const handleLogOut = () => {
        signOut(auth)
    }
    console.log(user?.photoURL)

    return (
        <div class="px-7 bg-white">
            <div class="navbar ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="">About Us</Link></li>

                            <li><Link to="">contact Us</Link></li>
                        </ul>
                    </div>
                    <img width="100px" src={logo} alt="" />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-x-4">
                        <li><Link to="/home"> <FontAwesomeIcon icon={faHome} /> Home</Link></li>
                        <li><Link to=""> <FontAwesomeIcon icon={faUserGroup} />  About Us</Link></li>

                        <li><Link to=""> <FontAwesomeIcon icon={faPhone} /> Contact Us</Link></li>
                        <li><Link to="/dashBoard"> <FontAwesomeIcon icon={faDashboard} /> DashBoard</Link></li>

                    </ul>
                </div>
                <div class="navbar-end">
                    {user ? <div class="flex-none gap-2">
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-7">
                                <div class="w-12 rounded-full ">
                                    {user?.photoURL ? <img src={user?.photoURL} /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUL74mlMc2p3yCzWfqRlR6RUF1inRZgnbqew&usqp=CAU" />}
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                {user?.email ? <li><a>{user?.email.length > 19 ? user?.email.slice(0, 19) + '...' : user?.email}</a></li> : ""}
                                {user?.displayName ? <li><a>{user?.displayName.length > 19 ? user?.displayName.slice(0, 19) + '...' : user?.displayName}</a></li> : ""}
                                <li>
                                    <Link to={'/profile'} ><a class="justify-between">
                                        <FontAwesomeIcon icon={faUser} /> <span className='ml-3'>Profile</span>

                                    </a></Link>
                                </li>

                                <li><button className='btn btn-primary mt-3' onClick={handleLogOut}><a className='text-white'> <FontAwesomeIcon icon={faArrowLeft} />  Logout</a></button></li>
                            </ul>
                        </div>
                    </div> : ''}
                    {!user ? <Link to={'/login'} class="btn btn-primary text-white">Login</Link> : ''}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
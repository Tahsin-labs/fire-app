import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        console.log("user triying to log out");
        logOut().then(() => {
            alert("You Logout ")
        }).catch((error) => {
            console.log(error)
        });

    }
    return (
        <div>


            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>   <NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/game">Game</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>   <NavLink to="/">Home</NavLink></li>
                        <li> <NavLink to="/game">Game</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3.5 ">

                    {
                        user ? <div className='flex gap-2'> <Link to="/profile"> <img className='w-12 rounded-full' src={`${user ? user.photoURL : ""}`} alt="" /></Link>
                            <button  className='btn btn-active btn-error text-white' onClick={handleLogout}>Logout</button>
                        </div>

                            : <div className='flex gap-2'>
                                <button>  <NavLink to="/login">Login</NavLink></button>
                                <button><NavLink to="/register">Register</NavLink></button>
                            </div>
                    }


                    {/* <button>  <NavLink to="/login">Login</NavLink></button>
                    <button><NavLink to="/register">Register</NavLink></button> */}


                </div>
            </div>
        </div>
    );
};

export default Header;
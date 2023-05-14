import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((res) => {})
            .catch((error) => {
                console.log(error);
            });
    };

    const menuList = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            {user ? (
                <>
                    <li>
                        <Link to="/bookings">Bookings</Link>
                    </li>
                    <li>
                        <button onClick={handleLogOut}>Log out</button>
                    </li>
                </>
            ) : (
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuList}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Real Doctor</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{menuList}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-error">Appointment</a>
            </div>
        </div>
    );
};

export default NavBar;

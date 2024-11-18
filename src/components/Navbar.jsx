import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    handleLogOutUser();
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-color-primary text-black font-semibold"
              : "bg-color-secondary text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-treatments"}
          className={({ isActive }) =>
            isActive
              ? "bg-color-primary text-black font-semibold"
              : "bg-color-secondary text-black"
          }
        >
          All treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "bg-color-primary text-black font-semibold"
              : "bg-color-secondary text-black"
          }
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-appoinments"}
          className={({ isActive }) =>
            isActive
              ? "bg-color-primary text-black font-semibold"
              : "bg-color-secondary text-black"
          }
        >
          My Appoinment
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  container mx-auto px-2 md:px-0 mb-5 md:mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <a className="btn btn-ghost text-xl hidden md:inline-flex">
            Tooth Talk
          </a>
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.ibb.co/pjVqyWS/logo-tooth-talk.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <div className="w-12 h-12 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={`${user.photoURL}`}
              alt=""
            />
          </div>
        ) : (
          <div></div>
        )}

        <Link to={user && user.email ? "/" : "/login"}>
          <button
            onClick={user && user.email ? handleLogOut : ""}
            className="bg-color-primary text-color-black rounded-md py-3 px-4 hover:bg-color-tertiary transition duration-300"
          >
            {user && user.email ? "Log Out" : "Log in"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

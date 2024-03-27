import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navItem = (
    <>
      <NavLink to="/" className="mr-4 font-semibold text-lg p-2">
        Home
      </NavLink>
      <NavLink to="/listedbooks" className="mr-4 font-semibold text-lg p-2">
        Listed Books
      </NavLink>
      <NavLink to="/pagestoread" className="mr-4 font-semibold text-lg p-2">
        Pages to Read
      </NavLink>
      <NavLink to="/kidszone" className="mr-4 font-semibold text-lg p-2">
        Kids Zone
      </NavLink>
      <NavLink to="/aboutus" className="mr-4 font-semibold text-lg p-2">
        About Us
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mt-5">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl font-bold">
          NovaBooks
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end hidden md:flex gap-2">
        <a className="btn font-semibold text-lg text-white bg-[#23BE0A]">
          Sign In
        </a>
        <a className="btn font-semibold text-lg text-white bg-[#59C6D2]">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;

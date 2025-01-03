import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#ED3D63] text-white  top-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <Link to="/">
        <div className="text-2xl font-bold flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </div>
        </Link>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex flex-grow justify-center space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 cursor-pointer text-xl">Home</Link>
          </li>
          <li>
            <Link to="/review" className="hover:text-gray-300 cursor-pointer text-xl">Reviews</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 cursor-pointer text-xl">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 cursor-pointer text-xl">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-300 cursor-pointer text-xl">Blog</Link>
          </li>
        </ul>

        {/* Login & Signup Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-[#ED3D63] py-2 px-6 rounded hover:bg-gray-100 font-semibold text-xl"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gray-800 py-2 px-6 rounded hover:bg-gray-700 font-semibold text-xl"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#ED3D63] text-white">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer text-xl">Home</Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer text-xl">Reviews</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer text-xl">About Us</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer text-xl">Contact Us</Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-300 cursor-pointer text-xl">Blog</Link>
            </li>
            {/* Login & Signup Buttons for Mobile */}
            <li>
              <Link
                to="/login" onClick={() => setIsMenuOpen(false)}
                className="bg-white text-[#ED3D63] py-2 px-6 rounded hover:bg-gray-100 font-semibold text-xl">
                Login
              </Link>
            </li> <br/>
            <li>
              <Link
                to="/signup" onClick={() => setIsMenuOpen(false)}
                className="bg-gray-800 py-2 px-6 rounded hover:bg-gray-700 font-semibold text-xl">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
